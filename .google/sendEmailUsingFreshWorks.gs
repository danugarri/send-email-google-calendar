function sendEmailUsingFreshWorks({ clientFullName, date, clientEmail }) {
  try {
    const { API_KEY_FRESHDESK, EMAIL_CONFIG_ID } = getEnvVariables();
    const payload = getPayLoad({
      clientFullName,
      date,
      clientEmail,
      EMAIL_CONFIG_ID,
    });

    const url = 'https://oferalia.freshdesk.com/api/v2/tickets/outbound_email';
    const options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization: `Basic ${Utilities.base64Encode(
          `${API_KEY_FRESHDESK}:X`
        )}`,
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
    };

    const response = UrlFetchApp.fetch(url, options);
    Logger.log(response.getContentText());
  } catch (error) {
    Logger.log('Error: ' + error.message);
  }
}
