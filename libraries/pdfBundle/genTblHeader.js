import { incrementLoopIndex, getPageHeight } from '../../utils'; // Adjust the path as necessary

const codeName = '[genTblHeader.js] ';

export const genTblHeader = (doc, text, startY) => {
  const loopIndex = incrementLoopIndex(); // Increment and get the loop index
  const PAGE_HEIGHT = getPageHeight(); // Get the stored page height
  const PAGE_BUFFER = 50; // Buffer from the bottom of the page

  console.log(codeName + `Loop ${loopIndex} - ${text} start = `, startY, ' pageHeight = ', PAGE_HEIGHT);

  const pageWidth = doc.internal.pageSize.getWidth();
  const margins = doc.internal.getMargins ? doc.internal.getMargins() : { left: 20 }; // Check if margins are set, otherwise default to 20
  const leftMargin = margins.left;

  const boxWidth = 0.8 * pageWidth; // Example: Box width as 80% of page width
  const boxHeight = 20;
  const boxStartX = leftMargin;

  // Check for page break with buffer
  if (startY + boxHeight >= PAGE_HEIGHT - PAGE_BUFFER) {
    doc.addPage();
    startY = 10; // Reset startY for the new page
    console.log(codeName + `Loop ${loopIndex} - Page break, new startY:`, startY, ' pageHeight = ', PAGE_HEIGHT);
  }

  doc.setFillColor(220, 220, 220);
  doc.rect(boxStartX, startY, boxWidth, boxHeight, 'F');

  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.setTextColor('red');
  const textX = leftMargin + 5; // Adjust to set the text a few pixels in from the margin
  const textY = startY + boxHeight / 2 + doc.getLineHeight() / 2 - 2;
  doc.text(text, textX, textY);
  console.log(codeName + `Loop ${loopIndex} - ${text} End = `, startY + boxHeight + 5);

  return { doc, finalY: startY + boxHeight + 5 }; // Adding padding directly in the function
};
