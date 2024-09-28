function setUpTrigger(event) {
  Logger.log({ event });

  sendEmailOnCalendarEvent(event);
}
