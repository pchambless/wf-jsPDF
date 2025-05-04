# wf-jsPDF
Create common format for **Whatsfresh** PDF Reports

# pdfBundle

A versatile library for generating **Whatsfresh** PDF reports with customizable headers, tables, and data pivoting.  

**Note:** This library incorporates the **jsPDF** and **jsPDF-autotable** libraries for rendering PDF documents

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Functions Overview](#functions-overview)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation
Installing the library using npm:
```bash
npm install pdfBundle
```

Installing in Appsmith:
1. Navigate to the **Libraries** icon
2. Click the plus (+) button
3. Install the latest version (for instance https://cdn.jsdelivr.net/npm/wf-jspdf@1.1.6/dist/index.umd.js)
  - **Note:** You can try installing https://cdn.jsdelivr.net/npm/wf-jspdf@latest/dist/index.umd.js but sometimes there's a lag.

## Usage
Here's how you can use the pdfBundle to generate a PDF:
```JavaScript
const hdrData = { acctName: 'Whatsfresh Account Name', 
                  title: '1st Part of 2nd Line', 
                  name: '2nd Part of 2nd Line', 
                  description: 'Either hard coded or rendered from data' };
const tblData = { [
    {
      "Code": "M",
      "Ingredient": "Mango",
      "gms/Oz": 22,
      "Units": "Pound",
    },
    {
      "Code": "P",
      "Ingredient": "Peach",
      "gms/Oz": 21,
      "Units": "Pound",
    },
    {
      "Code": "SB",
      "Ingredient": "Strawberry",
      "gms/Oz": 18,
      "Units": "Pound",
    }
  ] };

// Generate Report Header
var result = pdfBundle.genHeader(hdrData.acctName, hdrData.title, hdrData.name, hdrData.description);

// Generate Table Header
const hdrText = 'Table Header';
result = pdfBundle.genTblHeader(result.doc, hdrText, result.finalY);

// Generate Table
result = pdfBundle.genTable(result.doc, tblData, result.finalY);

// Export PDF
result.doc.save('example.pdf');
```
**Note:** You can generate multiple tables as needed.

## Functions Overview

It is assumed that ALL Whatsfresh PDF documents will have a Report Header
```javascript
var result = pdfBundle.genHeader(doc, acctName, title, name, descr)
```
Generates a header for the PDF.

**Parameters:**

**acctName:** Whatsfresh account to display at the top of the Report Header

**title:** The 1st part of the 2nd line of the Report Header.

**name:** The 2nd part of the 2nd line of the Report Header.  **Bolded**

**descr:** A free flowing description in *italic style*.

Returns:

An object containing the created doc and finalY position to be used for startY position of the next element.

## Examples

## Contributing

## License
