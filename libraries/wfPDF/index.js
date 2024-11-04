export default {

rptConstants(doc, pageWidth, title, name, descr) {
  
// Retrieve stored values
  const rptStyle = appsmith.store.rptStyle;
  const logoStyle = appsmith.store.logoStyle;
  const acctStyle = appsmith.store.acctStyle;
  const rptDateStyle = appsmith.store.rptDateStyle;
  const hdrStyle = appsmith.store.hdrStyle;

// Set Header Box
  doc.setLineWidth(hdrStyle.lineWidth);
  doc.setFillColor(hdrStyle.fillColor);
  doc.setDrawColor(hdrStyle.lineColor);
  doc.roundedRect(hdrStyle.rect.x, hdrStyle.rect.y, hdrStyle.rect.width, hdrStyle.rect.height, hdrStyle.rx, hdrStyle.ry, 'FD');
  this.rptTitle(doc, pageWidth, title, name, descr);

// WF Logo
  doc.addImage(appsmith.store.wfLogo, 'JPEG', logoStyle.x, logoStyle.y, logoStyle.width, logoStyle.height);

// Account Name
  const acctName = appsmith.store.acct_name;
  doc.setFontSize(acctStyle.fontSize);
  doc.setFont(undefined, acctStyle.fontStyle);
  doc.setTextColor(acctStyle.textColor);
  doc.text(acctName, acctStyle.position.x, acctStyle.position.y, null, null, acctStyle.align);

// Report Date
  const date = "Date: " + moment().format('YYYY-MM-DD');
  doc.setFontSize(rptDateStyle.fontSize);
  doc.setFont(undefined, rptDateStyle.fontStyle);
  doc.setTextColor(rptDateStyle.textColor);
  doc.text(date, rptDateStyle.position.x, rptDateStyle.position.y, null, null, rptDateStyle.align);
  
  return doc;
},
  
rptTitle(doc, pageWidth, title, titleVal, descr) {
// Report Name and Info
  doc.setFontSize(14);
  doc.setTextColor("black");

// Set title, name, and date on the same line
    doc.setFontSize(14);
    doc.setTextColor("black");
    doc.setFont("times", "normal");

// Get Report Name element widths    
    const titleWidth = doc.getTextWidth(title);
    const nameWidth = doc.getTextWidth(titleVal);
    const totalWidth = titleWidth + nameWidth;

// Format Report Name and info
    const startX = (pageWidth - totalWidth) / 2; // Center the text
    doc.text(title, startX, 20);
    doc.setFont("times", "bold");
    doc.text(titleVal, startX + titleWidth, 20);

// Format Description
    doc.setFontSize(12);
    doc.setFont("times", 'italic')
    doc.setTextColor("blue");  // light red
    doc.text(descr, 105, 28, 
        { maxWidth: 135, align: "center" },"center");	 
  
    return doc;
  },

reportStyles() {
// Storing common report styles
    storeValue('rptStyle', {
      font: 'times',
      theme: 'grid',
      halign: 'left',
    });

// Storing header border info 
  storeValue('hdrStyle', { 
      lineWidth: 0.5, 
      lineColor: '#000000', 
      rect: { x: 10, 
              y: 5, 
              width: 190, 
              height: 40,
            }, 
      fillColor: '#dcfce7',
      rx: 3, // rounded corners 
      ry: 3 // rounded corners 
    });

// Storing logo position
    storeValue('logoStyle', {
      x: 12,
      y: 7,
      width: 15,
      height: 15
  });

// Storing account name info
    storeValue('acctStyle', {
      fontSize: 18,
      fontStyle: 'bold',
      textColor: 'red',
      position: { x: 105, y: 13 },
      align: 'center',
    });

    // Storing report date info
    storeValue('rptDateStyle', {
      fontSize: 12,
      fontStyle: 'normal',
      textColor: 'black',
      position: { x: 195, y: 13 },
      align: 'right',
    });
  },
  tableStyles () {
// Storing common table body styles
    storeValue('bodyStyle', {
      lineWidth: 0.3,
      lineColor: 'black',
      minCellHeight: 0.5,
      cellPadding: 1.1,
      fontSize: 11,
      font: 'times',
    });
  // Storing common table header styles
    storeValue('headStyle', {
      lineWidth: 0.3,
      lineColor: 'black',
      fillColor: 'lightblue',
      textColor: 'black',
      fontSize: 12,
      font: 'times',
    });
  }
  }