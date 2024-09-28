const getEventDate = (event) => {
  try {
    const start = event.getStartTime();

    // Format the date and time
    const startDate = Utilities.formatDate(
      start,
      Session.getScriptTimeZone(),
      'dd-MM-yyyy'
    );
    const startTime = Utilities.formatDate(
      start,
      Session.getScriptTimeZone(),
      'HH:mm'
    );

    Logger.log(`Start Date: ${startDate}`);
    Logger.log(`Start Time: ${startTime}`);

    return { day: startDate, hour: startTime };
  } catch (e) {
    throw new Error(`${e.message}`);
  }
};
