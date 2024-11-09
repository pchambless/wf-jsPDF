import jsPDF from 'jspdf';
import autotable from 'jspdf-autotable';
import wfLogo from '../../public/wf-180.png'

export const genHeader = (orientation, acctName, title, name, descr) => {
  // Initialize jsPDF with the given orientation 
  const doc = new jsPDF({
    orientation: orientation,
    unit: 'pt',
  });
  doc.setProperties({ margin: 20 });
  doc.text("", 0, 0);

  // Set document Font
  doc.setFont('times');

  // Get Report Name element widths
  var startY = 5;
  var pageWidth = doc.internal.pageSize.getWidth() - 50;
  console.log('page width: ', pageWidth);
  const pageCenter = pageWidth / 2;
  const acctNameWidth = doc.getTextWidth(acctName);
  const titleWidth = doc.getTextWidth(title);
  const nameWidth = doc.getTextWidth(name);
  const titleNameWidth = titleWidth + nameWidth; // Title and Name
  const descrWidth = doc.getTextWidth(descr);

  // Set Header Box
  doc.setLineWidth(0.5);
  doc.setFillColor('#dcfce7');
  doc.setDrawColor('black');
  doc.roundedRect(10, startY, pageWidth, 80, 3, 3, 'FD');

  // WF Logo (Image, 'PNG', x, y, width, height)
  doc.addImage(wfLogo, 'JPEG', 15, startY + 4, 30, 30);

  // Account Name
  startY += 15;
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.setTextColor('red');
  doc.text(acctName, pageCenter, startY, null, null, 'center'); // Centered horizontally

  // Report Date
  const date = "Date: " + new Date().toISOString().split('T')[0];
  doc.setFontSize(12);
  doc.setFont(undefined, 'normal');
  doc.setTextColor('black');
  doc.text(date, pageWidth, startY, null, null, 'right');

  // Set title and name on the same line
  startY += 20;
  let startX = (pageCenter - (titleNameWidth / 2)); // Center the text
  doc.setFontSize(14);
  doc.setTextColor("black");
  doc.setFont("times", "normal");
  doc.text(title, startX, startY);
  doc.setFont("times", "bold");
  doc.text(name, startX + titleWidth, startY);

  // Format Description
  startY += 20;
  doc.setFontSize(12);
  doc.setFont("times", 'italic');
  doc.setTextColor("blue");
  doc.text(descr, pageCenter, startY, { maxWidth: pageWidth - 20, align: "center" }, "center"); // Centered horizontally

  return doc;
}
;

export const genTable = (doc, tblData, columnStyles, startY) => {
  console.log('Inside function BEFORE genTable:', JSON.stringify(doc, null, 2).slice(0, 500));

  const tblHead = Object.keys(tblData[0] || {}).map(key => key.trim());
  const tblBody = tblData.map(item => Object.values(item));

  autotable(doc, {
    columnStyles,
    head: [tblHead], // Ensure headers are passed as an array of arrays
    body: tblBody,
    startY,
    headStyles: {
      lineWidth: 0.3,
      lineColor: 'black',
      fillColor: 'lightblue',
      textColor: 'blue',
      fontSize: 12,
      font: 'times',
      cellPadding: 2,
      halign: 'center', // Center align the header text
      valign: 'middle'  // Vertically align the header text to the middle
    },
    bodyStyles: {
      lineWidth: 0.3,
      lineColor: 'black',
      minCellHeight: 0.5,
      cellPadding: 2, // Ensure consistent padding
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

  console.log('Inside function AFTER genTable:', JSON.stringify(doc, null, 2).slice(0, 500));
  return doc;
};
;

// calculate resizeWidth
// function calculateResizeWidth(contentWidth, pageWidth) {
  // Logic to calculate resizeWidth based on content width and page width
  // This is just a placeholder. You need to implement the actual logic.
//  return pageWidth / contentWidth;
// }
// ;

const pdfBundle = { genHeader, genTable };
export default pdfBundle;
