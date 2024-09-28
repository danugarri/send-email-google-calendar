function checkOrganiserEmail(event, BOSS_EMAIL) {
  const organizerEmail = event.getCreators()[0];
  const isBossEmail = organizerEmail === BOSS_EMAIL;

  if (!isBossEmail) {
    Logger.log('It is not created by your boss');
    return;
  }
  return isBossEmail;
}
