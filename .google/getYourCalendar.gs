function getYourCalendar() {
  const yourCalendarName = 'the-calendar-you-listen-to';
  const calendars = CalendarApp.getAllCalendars();

  const yourCalendar = calendars.find(
    (calendar) =>
      calendar.getName().toLowerCase() === yourCalendarName.toLowerCase()
  );

  Logger.log({ yourCalendar, id: yourCalendar.getId() });

  if (yourCalendar) {
    return { yourCalendar, calendarId: yourCalendar.getId() };
  } else {
    Logger.log('Calendar not found');
    return null;
  }
}
