import { genHeader, genTable } from '../dist/index.umd.js';
import fs from 'fs'; // Import file system module
import { hdrData } from './data/header.js'; 
import { tblData } from './data/table.js';

describe('buildPDF', () => {
  it('should generate a PDF with the correct header', () => {

    // Define the buildPDF function
    function buildPDF() {
      // Pick the orientation
      const orientation = 'portrait';

      // Build Report
      // Use imported header data
      const { acctName, title, name, description } = hdrData;
      var doc = genHeader(orientation, acctName, title, name, description);

      // Build the column styles
      const columnStyles = { 
        0: { cellWidth: [10], halign: 'center', fontStyle: 'bold' }, 
        1: { cellWidth: [25], halign: 'left', fontStyle: 'bold' }, 
        2: { cellWidth: [15], halign: 'right' }, 
        3: { cellWidth: [15], halign: 'left' }, 
        4: { cellWidth: [15], halign: 'left' }, 
        5: { cellWidth: [15], halign: 'right' }, 
        6: { cellWidth: [25], halign: 'left' }, 
        7: { cellWidth: [25], halign: 'left' }
      };

// Custom style callback to make cells bold based on criteria
console.log('Before styleCallback.');
const styleCallback = data => {
  if (data.column.index === 0 && data.cell.text[0] === 'M') {
    console.log('In styleCallback -> Row: ', data.row.index, 'Column: ', data.column.index, ' Text: ', data.cell.text[0]);
    data.cell.styles.fontStyle = 'bold';
    data.cell.styles.textColor = 'red'; // Ensure text color is red
    data.cell.styles.fontSize = 14; // Ensure font size is appropriate
    data.cell.styles.font = 'times'; // Ensure font family is consistent
  }
};



      // Create the table with the style callback
      doc = genTable(doc, tblData, columnStyles, 91, styleCallback);

      return doc.output('dataurlstring');
    }

    // Run the test
    const pdfOutput = buildPDF();

    // Write the PDF to a file for manual inspection
    const pdfData = pdfOutput.split(',')[1]; // Remove the data URL prefix
    const pdfBuffer = Buffer.from(pdfData, 'base64');
    fs.writeFileSync('C:/Users/pc790/OneDrive/Consulting/Whatsfresh/aaTestPDF.pdf', pdfBuffer);

    // Add assertions to verify the output
    expect(pdfOutput.startsWith("data:application/pdf;filename=generated.pdf;base64")).toBe(true);
  });
});
