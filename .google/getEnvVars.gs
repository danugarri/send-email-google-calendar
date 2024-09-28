// In google App Scripts it is not needed to add exports
function getEnvVariables() {
  const scriptProperties = PropertiesService.getScriptProperties();

  const API_KEY_FRESHDESK = scriptProperties.getProperty('API_KEY_FRESHDESK');
  const BOSS_EMAIL = scriptProperties.getProperty('BOSS_EMAIL');
  const FILE_ID = scriptProperties.getProperty('FILE_ID');
  const EMAIL_CONFIG_ID = scriptProperties.getProperty('EMAIL_CONFIG_ID');

  return {
    API_KEY_FRESHDESK,
    BOSS_EMAIL,
    FILE_ID,
    EMAIL_CONFIG_ID,
  };
}
