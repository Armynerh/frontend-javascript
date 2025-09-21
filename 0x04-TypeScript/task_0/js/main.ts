// student.ts

// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "Toronto",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 23,
  location: "Vancouver",
};

// 3. Add them into an array
const studentsList: Student[] = [student1, student2];

// 4. Render a table with firstName + location
const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = tableHead.insertRow();

const headerCell1: HTMLTableCellElement = document.createElement("th");
headerCell1.textContent = "First Name";
const headerCell2: HTMLTableCellElement = document.createElement("th");
headerCell2.textContent = "Location";

headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);

const tableBody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tableBody.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  cell1.textContent = student.firstName;

  const cell2: HTMLTableCellElement = row.insertCell();
  cell2.textContent = student.location;
});

table.appendChild(tableBody);
document.body.appendChild(table);
