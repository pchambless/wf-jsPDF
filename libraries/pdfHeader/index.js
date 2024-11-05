import jsPDF from 'jspdf';

const genHeader = (doc, pageWidth, title, name, descr, wfLogo, acctName) => {
  // set document text font
  const pageCenter = pageWidth - 20;
  jsPDF.doc.setFont('times');

  // Set Header Box
  doc.setLineWidth(0.5);
  doc.setFillColor('#dcfce7');
  doc.setDrawColor('black');
  // roundedRect (x, y, pageWidth, height, rx, ry, 'FD')
  doc.roundedRect(10, 5, pageCenter, 40, 3, 3, 'FD');

  // WF Logo (Image, 'JPEG', x, y, width, height)
  doc.addImage(wfLogo, 'JPEG', 12, 7, 15, 15);
  
  // Account Name
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.setTextColor('red');
  doc.text(acctName, 105, 13, null, null, 'center');

  // Report Date
  const date = "Date: " + new Date().toISOString().split('T')[0];
  doc.setFontSize(12);
  doc.setFont(undefined, 'normal');
  doc.setTextColor('black');
  doc.text(date, pageCenter, 13, null, null, 'right');

  // Report Name and Info
  doc.setFontSize(14);
  doc.setTextColor("black");
  // Set title, name, and date on the same line
  doc.setFontSize(14);
  doc.setTextColor("black");
  doc.setFont("times", "normal");
  // Get Report Name element widths    
  const titleWidth = doc.getTextWidth(title);
  const nameWidth = doc.getTextWidth(name);
  const totalWidth = titleWidth + nameWidth;
  // Format Report Name and info
  let startX = (pageCenter - totalWidth) / 2; // Center the text
  doc.text(title, startX, 20);
  doc.setFont("times", "bold");
  doc.text(name, startX + titleWidth, 20);
  // Format Description
  doc.setFontSize(12);
  doc.setFont("times", 'italic');
  doc.setTextColor("blue");
  doc.text(descr, startX + descrWidth, 28, 
      { maxWidth: 135, align: "center" },"center");

  return doc;
};

export default genHeader;
