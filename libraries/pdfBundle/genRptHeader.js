import jsPDF from 'jspdf';
import wfLogo from '../../public/wf-180.png';
import { resetLoopIndex, setPageHeight, getPageHeight } from '../../utils'; // Adjust the path as necessary

const codeName = '[genRptHeader.js]';
console.log(codeName, ' loaded');

export const genHeader = (orientation, acctName, title, name, descr) => {
  resetLoopIndex(); // Reset the loop index at the start
  setPageHeight(orientation); // Set the page height based on orientation

  const doc = new jsPDF({
    orientation: orientation,
    unit: 'pt',
  });
  const leftMargin = 20;
  doc.setProperties({ margin: 20 });
  doc.text("", 0, 0);

  doc.setFont('times');

  let startY = 5;
  const pageWidth = doc.internal.pageSize.getWidth() - 50;
  const pageCenter = pageWidth / 2;
  const titleWidth = doc.getTextWidth(title);
  const nameWidth = doc.getTextWidth(name);
  const titleNameWidth = titleWidth + nameWidth;

  doc.setFontSize(12);
  doc.setFont("times", 'italic');
  const textDimensions = doc.getTextDimensions(descr, { maxWidth: pageWidth - 40 });
  const descriptionHeight = textDimensions.h;

  // Calculate header height dynamically based on content
  const headerHeight = 60 + descriptionHeight; // Adjusting for content height

  // Draw header box
  doc.setLineWidth(0.5);
  doc.setFillColor('#dcfce7');
  doc.setDrawColor('black');
  doc.roundedRect(leftMargin, startY, pageWidth, headerHeight, 3, 3, 'FD');

  // Add logo
  doc.addImage(wfLogo, 'JPEG', leftMargin + 5, startY + 4, 30, 30);

  // Add account name
  startY += 15;
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.setTextColor('red');
  doc.text(acctName, pageCenter, startY, null, null, 'center');

  // Add date
  const date = "Date: " + new Date().toISOString().split('T')[0];
  doc.setFontSize(12);
  doc.setFont(undefined, 'normal');
  doc.setTextColor('black');
  doc.text(date, pageWidth, startY, null, null, 'right');

  // Add title and name
  startY += 20;
  let startX = (pageCenter - (titleNameWidth / 2));
  doc.setFontSize(14);
  doc.setTextColor("black");
  doc.setFont("times", "normal");
  doc.text(title, startX, startY);
  doc.setFont("times", "bold");
  doc.text(name, startX + titleWidth, startY);

  // Calculate description position
  startY += 20;
  const descriptionY = startY;
  const descriptionWidth = pageWidth - 40;
  const descriptionX = leftMargin + 10; // Adjust for padding

  doc.setFontSize(12);
  doc.setFont("times", 'italic');
  doc.setTextColor("blue");
  const lines = doc.splitTextToSize(descr, descriptionWidth);
  const lineHeight = doc.getLineHeight() * doc.internal.scaleFactor;

  lines.forEach((line, i) => {
    const lineWidth = doc.getTextWidth(line);
    const lineX = descriptionX + (descriptionWidth - lineWidth) / 2;
    const lineY = descriptionY + i * lineHeight;
    doc.text(line, lineX, lineY);
  });

  // Update finalY position with proper padding for the next element
  const finalY = descriptionY + lines.length * lineHeight + 10; // Adding padding for next element
  console.log(codeName, ' end = ', finalY);

  return { doc, finalY };
};
