const deleteTemporalFile = (fileId) => {
  try {
    if (fileId) {
      DriveApp.getFileById(fileId).setTrashed(true);

      Logger.log('Temporary Google Sheets file deleted successfully.');
    }
  } catch (e) {
    Logger.log({ error: e });
  }
};
