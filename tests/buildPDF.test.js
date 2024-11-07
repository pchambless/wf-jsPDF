import { jsPDF } from 'jspdf';
import pdfHeader from '../dist/index.umd.js';
console.log(pdfHeader);

describe('buildPDF', () => {
  it('should generate a PDF with the correct header', () => {
    // Mock data
    const tbl_Entity = {
      selectedRow: {
        name: "Sample Name",
        description: "Sample Description"
      }
    };

    // Define the buildPDF function
    function buildPDF() {
      // Initialize jsPDF
      var doc = new jsPDF({ orientation: 'portrait' });
      doc.text("", 0, 0);

      // Get the width of the document based on its orientation
      var pageWidth = doc.internal.pageSize.getWidth();

      // Build Report
      const title = `Ingredient Type: `;
      const name = tbl_Entity.selectedRow.name;
      const descr = tbl_Entity.selectedRow.description;
      pdfHeader.genHeader(doc, pageWidth, title, name, descr);

      return doc.output("dataurlstring");
    }

    // Run the test
    const pdfOutput = buildPDF();
    console.log(pdfOutput);

    // Add assertions to verify the output
    expect(pdfOutput).toContain("data:application/pdf;base64");
  });
});
