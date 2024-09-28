const getFileId = (sheetId) => {
  let fileId;
  const isExcelFile = DriveApp.getFileById(sheetId).getName().endsWith('xlsx');
  if (isExcelFile) {
    fileId = convertExcelToGoogleSheets(sheetId);
  }

  return fileId;
};
