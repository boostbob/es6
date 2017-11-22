const XLSX = require('xlsx');

var sheet = XLSX.utils.json_to_sheet([
  {name: '张三'}
]);

var workbook = {
  SheetNames: ['Sheet 1'],
  Sheets: {
    'Sheet 1': sheet
  }
};

XLSX.writeFile(workbook, 'out.xlsx');