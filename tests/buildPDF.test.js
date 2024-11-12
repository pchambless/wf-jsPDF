import { genHeader, genTable } from '../dist/index.umd.js';
import fs from 'fs'; // Import file system module
import { hdrData } from './data/header.js'; 
import { tblData } from './data/table.js';
import jsPDF from 'jspdf'; 
import autoTable from 'jspdf-autotable';


describe('buildPDF', () => {
  it('should generate a PDF with the correct header', () => {

// Define the buildPDF function
    function buildPDF() {

// pick the orientation
    const orientation = 'portrait'

// Build Report
// Use imported header data
  const { acctName, title, name, description } = hdrData;
  var doc = genHeader(orientation, acctName, title, name, description);

  console.log('test AFTER genHeader:', JSON.stringify(doc, null, 2).slice(0, 500));

// Build the column Styles
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
// Create the table
  doc = genTable(doc, tblData, columnStyles, 91);
// console.log('After genTable:', JSON.stringify(doc, null, 2).slice(0, 500));

// return PDF
  return doc.output('dataurlstring')
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
