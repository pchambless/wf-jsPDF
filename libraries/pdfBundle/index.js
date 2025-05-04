import { genHeader } from './genRptHeader';
import { genTable } from './genTable';
import { genTblHeader } from './genTblHeader';
import { pivotData } from './pivotData';

console.log("Functions imported:", { genHeader, genTable, genTblHeader, pivotData });

// Export named functions explicitly
export { genHeader, genTable, genTblHeader, pivotData };

// Create a default export for the bundle
const pdfBundle = { genHeader, genTable, genTblHeader, pivotData };
export default pdfBundle;
