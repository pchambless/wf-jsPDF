import autotable from 'jspdf-autotable';

const codeName = '[genTable.js] ';

export const genTable = (doc, tblData, columnStyles, startY) => {
  const LEFT_MARGIN = 20;
  const FINAL_Y_INCREMENT = 5; // Adjust the increment to avoid overcompensation
  const PAGE_HEIGHT = doc.internal.pageSize.getHeight();
  
  const tblHead = Object.keys(tblData[0] || {}).map(key => key.trim());
  const tblBody = tblData.map(item => Object.values(item));

  let finalY = startY;
  const scaleFactor = doc.internal.scaleFactor || 1; // Default to 1 if undefined
  const lineHeight = doc.getLineHeight() * scaleFactor;

  autotable(doc, {
    columnStyles,
    head: [tblHead], // Ensure headers are passed as an array of arrays
    body: tblBody,
    startY,
    margin: { left: LEFT_MARGIN }, // Apply the left margin
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
      minCellHeight: lineHeight, // Use line height to ensure consistent spacing
      cellPadding: 2, // Ensure consistent padding
      textColor: 'black',
      fontSize: 11,
      font: 'times'
    },
    didDrawCell: function (data) {
      // Update yPosition to include multi-line cell height
      const yPosition = data.cell.y + data.cell.height; // Ensure y position is scaled appropriately
      finalY = Math.max(finalY, yPosition + lineHeight);
    }
  });

  finalY += FINAL_Y_INCREMENT; // Adjust to add minimal padding between elements

  return { doc, finalY };
};
