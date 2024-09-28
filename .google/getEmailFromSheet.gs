function getEmailFromSheet(fullNameArray, sheetId) {
  let copiedFileId;
  try {
    let fileId = sheetId;
    copiedFileId = getFileId(sheetId);
    Logger.log({ copiedFileId });
    if (copiedFileId) {
      fileId = copiedFileId;
    }
    const clientName = fullNameArray[0];
    const clientSurName = fullNameArray.slice(1).join(' ');
    Logger.log({ fileId, clientName, clientSurName });

    // Open the Google Sheets file by ID
    const spreadSheet = SpreadsheetApp.openById(fileId);
    const sheet = spreadSheet.getActiveSheet();

    const data = sheet.getDataRange().getValues(); // Get all data from the sheet
    // Extract headers to find column indices
    const headers = data[0]; // Assuming the first row is headers

    // Locate indices for Nombre, Apellidos, and Email columns
    const nameIndex = headers.indexOf('Nombre');
    const surnameIndex = headers.indexOf('Apellidos');
    const emailIndex = headers.indexOf('Email');

    if (nameIndex === -1 || surnameIndex === -1 || emailIndex === -1) {
      throw new Error('Required columns not found in the sheet');
    }

    // Search for the full name and return the email
    for (let i = 1; i < data.length; i++) {
      // Start from 1 to skip header row
      const row = data[i];
      const rowName = row[nameIndex];
      const rowSurname = row[surnameIndex];

      if (
        rowName.toLowerCase().includes(clientName.toLowerCase()) &&
        rowSurname.toLowerCase().includes(clientSurName.toLowerCase())
      ) {
        Logger.log({ rowName, rowSurname });
        return row[emailIndex];
      }
    }

    return null;
  } catch (error) {
    Logger.log({ error });
  } finally {
    deleteTemporalFile(copiedFileId);
  }
}
