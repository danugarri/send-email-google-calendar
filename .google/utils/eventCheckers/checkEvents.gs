function checkEvents(danielaCalendar) {
  const now = new Date();
  const oneDayLater = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const eventsList = danielaCalendar.getEvents(now, oneDayLater);
  //   Look for events in Daniela Calendar since setUp is triggered up to 24h
  Logger.log({ eventsList });
  if (eventsList.length === 0) {
    Logger.log('No Events found');
    return;
  }

  return eventsList;
}
