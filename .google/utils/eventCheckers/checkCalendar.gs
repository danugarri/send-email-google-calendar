function checkCalendar(event) {
  const calendarId = event.calendarId;
  const { calendarId: yourCalendarId } = getYourCalendar();
  // check if the calendar is the desired
  if (calendarId !== yourCalendarId) {
    Logger.log('The calendar updated is not your Calendar');
    throw new Error('The calendar updated is not your Calendar');
  }
}
