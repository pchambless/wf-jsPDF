// tests/data/pdfEndpoints.js
module.exports = {
  pdfEndpoints:
  [
    {
      "id": 85,
      "eventType": "prodBtchRcpe",
      "method": "GET",
      "qrySQL": null,
      "params": "prodID",
      "parentID": 76,
      "purpose": "Fetch all the Ingr for a Prod Btch given the Prod Rcpe."
    },
    {
      "id": 61,
      "eventType": "acctList",
      "method": "GET",
      "qrySQL": "",
      "params": "",
      "parentID": 3,
      "purpose": "Get the list of WF Accounts"
    },
    {
      "id": 60,
      "eventType": "acctDelete",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 3,
      "purpose": "Soft Delete a WF Account."
    },
    {
      "id": 44,
      "eventType": "acctEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 3,
      "purpose": "Edit certain fields in the Account table."
    },
    {
      "id": 59,
      "eventType": "acctAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 3,
      "purpose": "Add a WF Account"
    },
    {
      "id": 4,
      "eventType": "brndList",
      "method": "GET",
      "qrySQL": "",
      "params": "",
      "parentID": 10,
      "purpose": "the List of Brands."
    },
    {
      "id": 63,
      "eventType": "brndDelete",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 10,
      "purpose": "Soft Delete a Brand."
    },
    {
      "id": 3,
      "eventType": "brndEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 10,
      "purpose": "Edit the Brand name."
    },
    {
      "id": 2,
      "eventType": "brndAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 10,
      "purpose": "Add a Brand."
    },
    {
      "id": 70,
      "eventType": "ingrBtchDelete",
      "method": "DELETE",
      "qrySQL": "",
      "params": "",
      "parentID": 12,
      "purpose": "Soft Delete an Ingredient Batch"
    },
    {
      "id": 69,
      "eventType": "ingrBtchList",
      "method": "GET",
      "qrySQL": "",
      "params": "",
      "parentID": 12,
      "purpose": "List the selected Ingredient's Batches"
    },
    {
      "id": 8,
      "eventType": "ingrBtchEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 12,
      "purpose": "Edit an Ingredient Batch"
    },
    {
      "id": 7,
      "eventType": "ingrBtchAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 12,
      "purpose": "Add an Ingredient Batch"
    },
    {
      "id": 89,
      "eventType": "ingrTypeAdd",
      "method": "POST",
      "qrySQL": "insert into ingredient_types\n(name, description, account_id)\nVALUES\n(:name, :description, :acctID)",
      "params": "[\n  \":name\",\n  \":description\",\n  \":acctID\"\n]",
      "parentID": 7,
      "purpose": "Add an Ingredient Type"
    },
    {
      "id": 81,
      "eventType": "ingrList",
      "method": "GET",
      "qrySQL": "",
      "params": "",
      "parentID": 13,
      "purpose": "List of Ingredients"
    },
    {
      "id": 80,
      "eventType": "ingrDelete",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 13,
      "purpose": "Soft Delete an Ingredient."
    },
    {
      "id": 79,
      "eventType": "ingrEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 13,
      "purpose": "Edit an Ingredient"
    },
    {
      "id": 78,
      "eventType": "ingrAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 13,
      "purpose": "Add an Ingredient"
    },
    {
      "id": 17,
      "eventType": "unitList",
      "method": "GET",
      "qrySQL": "",
      "params": "",
      "parentID": 8,
      "purpose": "List all WF Measure Units.  These units are for ALL WF Accounts."
    },
    {
      "id": 77,
      "eventType": "unitDelete",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 8,
      "purpose": "Soft Delete a Measure Unit."
    },
    {
      "id": 16,
      "eventType": "unitEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 8,
      "purpose": "Edit a Measure Unit."
    },
    {
      "id": 15,
      "eventType": "unitAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 8,
      "purpose": "Add to Global list (all Accounts) of Measure Units."
    },
    {
      "id": 34,
      "eventType": "prodTypeTaskList",
      "method": "GET",
      "qrySQL": "",
      "params": "",
      "parentID": 16,
      "purpose": "list PROD TYPE tasks."
    },
    {
      "id": 33,
      "eventType": "prodTypeTaskEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 16,
      "purpose": "Task Edit"
    },
    {
      "id": 83,
      "eventType": "taskDelete",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 16,
      "purpose": "Soft Delete of Task"
    },
    {
      "id": 32,
      "eventType": "prodTypeTaskAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 16,
      "purpose": "Add a PROD TYPE task."
    },
    {
      "id": 20,
      "eventType": "prodBtchEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 15,
      "purpose": "Edit a Product Batch"
    },
    {
      "id": 21,
      "eventType": "btchMap",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 15,
      "purpose": "Map an Ingredient Batch to a Product Batch based on the Product Recipe."
    },
    {
      "id": 19,
      "eventType": "prodBtchAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 15,
      "purpose": "Add a Product Batch.  At the same time add the associated PROD TYPE TASKS associated to the PROD TYPE"
    },
    {
      "id": 30,
      "eventType": "prodTypeEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 2,
      "purpose": "Edit a Product"
    },
    {
      "id": 28,
      "eventType": "prodTypeAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 2,
      "purpose": "Add a Product."
    },
    {
      "id": 24,
      "eventType": "prodEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 9,
      "purpose": "Edit Product Info"
    },
    {
      "id": 18,
      "eventType": "prodAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 9,
      "purpose": "Add a Product."
    },
    {
      "id": 27,
      "eventType": "rcpeList",
      "method": "GET",
      "qrySQL": "",
      "params": "",
      "parentID": 14,
      "purpose": "List the Recipe Ingredients for a selected Product."
    },
    {
      "id": 26,
      "eventType": "rcpeEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 14,
      "purpose": "Edit Recipe Ingredient for a selected Product"
    },
    {
      "id": 25,
      "eventType": "rcpeAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 14,
      "purpose": "Add Recipe Ingredient for a selected Product"
    },
    {
      "id": 37,
      "eventType": "userList",
      "method": "GET",
      "qrySQL": "",
      "params": "",
      "parentID": 6,
      "purpose": "The list of Whatsfresh Users."
    },
    {
      "id": 58,
      "eventType": "userDelete",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 6,
      "purpose": "Soft Delete a WF User."
    },
    {
      "id": 36,
      "eventType": "userEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 6,
      "purpose": "Edit WF User Info."
    },
    {
      "id": 35,
      "eventType": "userAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 6,
      "purpose": "Add a WF User"
    },
    {
      "id": 87,
      "eventType": "userLogin",
      "method": "POST",
      "qrySQL": "select id\nfrom users\nwhere email = :userEmail\nand password = :password",
      "params": "[\n  \":userEmail\",\n  \":password\"\n]",
      "parentID": 6,
      "purpose": "Login for User."
    },
    {
      "id": 40,
      "eventType": "vndrList",
      "method": "GET",
      "qrySQL": "",
      "params": "",
      "parentID": 5,
      "purpose": "Get the List of Vendors"
    },
    {
      "id": 66,
      "eventType": "vndrDelete",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 5,
      "purpose": "Soft Delete a Vendor"
    },
    {
      "id": 39,
      "eventType": "vndrEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 5,
      "purpose": "Edit Vendor info."
    },
    {
      "id": 38,
      "eventType": "vndrAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 5,
      "purpose": "Add a Vendor"
    },
    {
      "id": 43,
      "eventType": "wrkrList",
      "method": "GET",
      "qrySQL": "",
      "params": "",
      "parentID": 11,
      "purpose": "List of Account Workers."
    },
    {
      "id": 65,
      "eventType": "wrkrDelete",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 11,
      "purpose": "Soft Delete a Worker"
    },
    {
      "id": 42,
      "eventType": "wrkrEdit",
      "method": "PATCH",
      "qrySQL": "",
      "params": "",
      "parentID": 11,
      "purpose": "Edit a Worker name."
    },
    {
      "id": 41,
      "eventType": "wrkrAdd",
      "method": "POST",
      "qrySQL": "",
      "params": "",
      "parentID": 11,
      "purpose": "Add a worker to an Account"
    }
  ]
}