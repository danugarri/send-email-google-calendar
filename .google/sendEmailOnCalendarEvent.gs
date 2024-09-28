function sendEmailOnCalendarEvent(event) {
  const { BOSS_EMAIL, FILE_ID } = getEnvVariables();
  try {
    const { danielaCalendar } = getDanielaCalendar();
    // check if the calendar is the desired
    checkCalendar(event);
    // Check desired events
    const eventsList = checkEvents(danielaCalendar);
    // For each event
    eventsList.forEach((event) => {
      const { isSetup, eventTitle } = checkIsSetpUp(event);
      const isBossEmail = checkOrganiserEmail(event, BOSS_EMAIL);

      if (isSetup && isBossEmail) {
        const date = getEventDate(event);
        // Get client fullName
        const eventTitleArray = eventTitle.split(' ');
        const fullNameArray =
          eventTitleArray[0] === 'setup'
            ? eventTitleArray.slice(1)
            : eventTitleArray.slice(2);
        const clientFullName = fullNameArray.join(' ');

        const clientEmail = getEmailFromSheet(fullNameArray, FILE_ID);

        if (!clientEmail) {
          Logger.log(
            'No se encontró un correo electrónico para el cliente: ' +
              clientFullName
          );
          return;
        }
        sendEmailUsingFreshWorks({ clientFullName, date, clientEmail });
      }
    });
  } catch (error) {
    Logger.log({ error });
  }
}
