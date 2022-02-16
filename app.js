const ExcelJS = require("exceljs");
const workbook = new ExcelJS.Workbook();

workbook.creator = "Phan duc";
workbook.lastModifiedBy = "duc";
workbook.created = new Date(2022, 1, 1);
workbook.modified = new Date();
workbook.lastPrinted = new Date(2020, 1, 1);
const worksheet = workbook.addWorksheet("My sheet");

// Add a row
const row = worksheet.addRow([1, 2, 3]);
