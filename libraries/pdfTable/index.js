import 'jspdf-autotable';

const pdfTable = (doc, tblHead, tblData, columnStyles, startY = 46) => {
  jspdf_autotable(doc, {
    columnStyles,
    head: [tblHead],
    body: tblData,
    startY,
    headStyles: {
      lineWidth: 0.3,
      lineColor: 'black',
      fillColor: 'lightblue',
      textColor: 'blue',
      fontSize: 12,
      font: 'times'
    },
    bodyStyles: {
      lineWidth: 0.3,
      lineColor: 'black',
      minCellHeight: 0.5,
      cellPadding: 1.1,
      textColor: 'black',
      fontSize: 11,
      font: 'times'
    },
    didParseCell: function (data) {
      if (data.section === 'head') {
        data.cell.styles.halign = 'center';
      }
    }
  });
  return doc;
};

export default pdfTable;
