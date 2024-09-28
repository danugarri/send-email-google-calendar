function checkIsSetpUp(event) {
  // Extract event title => composed of SETUP + fullname
  const eventTitle = event.getTitle().toLowerCase();
  // Revisar el caso set up
  const isSetup = /\bset\s?up\b/.test(eventTitle);
  if (!isSetup) {
    Logger.log('It is not a setUp');
    return;
  }
  return { isSetup, eventTitle };
}
