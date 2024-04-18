// Triple-slash directive to include dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Call insertRow command
const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)\n// Insert row ${JSON.stringify(row)}`);

// Update row with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };

// Call updateRow command
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(${newRowID}, updatedRow);\n// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

// Call deleteRow command
CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID});\n// Delete row id ${newRowID}`);
