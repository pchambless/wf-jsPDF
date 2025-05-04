import { genHeader, genTable, genTblHeader } from '../dist/index.umd.js'; // Adjust the path as necessary
import fs from 'fs'; // Import file system module
import { pdfParents } from './data/pdfParents.js'; 
import { pdfEndpoints } from './data/pdfEndpoints.js'; // Ensure this path is correct

// Mock appsmith
global.appsmith = {
  store: {
    enabled: true,
  },
};

describe('buildPDF', () => {
  it('should generate a PDF with the correct content', () => {
    function buildPDF() {
      const codeName = '[buildPDF.js] ';
      
      const ORIENTATION = 'l';
      const RPT_NAME = 'Whatsfresh API Endpoints';
      const TITLE = 'Endpoints: ';
      const NAME = 'Enabled = ' + appsmith.store.enabled;
      const DESCR = 'This is the list of endpoints not yet ready for processing.';

      let result = genHeader(ORIENTATION, RPT_NAME, TITLE, NAME, DESCR);
      
      const COLUMN_STYLES = { 
        0: { cellWidth: 50, halign: 'center', fontStyle: 'bold' },
        1: { cellWidth: 100, halign: 'left', fontStyle: 'bold', fillColor: '#ffffe6' },
        2: { cellWidth: 60, halign: 'center', fontStyle: 'bold' },
        3: { cellWidth: 160, halign: 'left' },
        4: { cellWidth: 170, halign: 'left' }
      };

      const GRPS = pdfParents; // Correctly accessing the pdfParents array
      const eventRoutes = pdfEndpoints; // Correctly accessing the pdfEndpoints array

      if (!Array.isArray(eventRoutes)) {
        console.error(codeName + 'Error: eventRoutes is not an array');
        return null;
      }

      let lastFinalY = result.finalY; // Keep track of the last valid finalY

      GRPS.forEach((grp, index) => {
        const loopIndex = index + 1;

        result = genTblHeader(result.doc, grp.groupName, result.finalY);
        
        const tableData = eventRoutes
          .filter(route => route.parentID === grp.id)
          .map(route => ({
            'ID': route.id,
            'Event Type': route.eventType,
            'Method': route.method,
            'QrySQL': route.qrySQL,
            'Params': route.params,
            'Purpose': route.purpose
          }));

        const tableResult = genTable(result.doc, tableData, COLUMN_STYLES, result.finalY);

        if (tableResult.finalY > result.finalY) {
          result.finalY = tableResult.finalY;
        } else {
          console.error(codeName + `Loop ${loopIndex} - Warning: finalY went backward. Resetting to last valid finalY`);
          result.finalY = lastFinalY;
        }

        lastFinalY = result.finalY; // Update the last valid finalY
      });

      return result.doc.output('dataurlstring');
    }

    // Run the buildPDF function
    const pdfOutput = buildPDF();

    // Check if pdfOutput is properly generated
    expect(pdfOutput).not.toBeNull();
    expect(pdfOutput).toBeDefined();

    if (pdfOutput) {
      // Write the PDF to a file for manual inspection (optional)
      const pdfData = pdfOutput.split(',')[1]; // Remove the data URL prefix
      const pdfBuffer = Buffer.from(pdfData, 'base64');
      fs.writeFileSync('C:/Users/pc790/OneDrive/Consulting/Whatsfresh/aaTestPDF.pdf', pdfBuffer); // Adjust the path as necessary

      // Add assertions to verify the output
      expect(pdfOutput.startsWith("data:application/pdf;filename=generated.pdf;base64")).toBe(true);

      // Additional checks can be added here, for example:
      // - Checking specific content in the PDF
      // - Verifying the structure of the generated PDF
    } else {
      console.error('pdfOutput is null or undefined');
    }
  });
});
