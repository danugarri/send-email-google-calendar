function convertExcelToGoogleSheets(excelFileId) {
  try {
    // Get the Excel file as a blob
    const excelFile = DriveApp.getFileById(excelFileId);
    const blob = excelFile.getBlob();

    // Define resource for the new Google Sheets file
    const resource = {
      title: excelFile.getName().replace('.xlsx', ''), // Name without extension
      mimeType: MimeType.GOOGLE_SHEETS, // Ensure the correct MIME type for Google Sheets
    };

    // Use Drive API to convert the Excel file to Google Sheets format
    const convertedFile = Drive.Files.insert(resource, blob, {
      convert: true, // Ensure the file is converted to Google Sheets format
    });

    const convertedFileId = convertedFile.id;
    Logger.log('Converted file ID: ' + convertedFileId);
    return convertedFileId;
  } catch (error) {
    Logger.log('Error converting file: ' + error.message);
  }
}
