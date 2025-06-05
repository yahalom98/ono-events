// DOM
// inputs
let nameInput = document.querySelector(".input-name");
let idInput = document.querySelector(".input-id");
let salaryInput = document.querySelector(".input-salary");

// buttons
let addEmployee = document.querySelector(".add-employee");
let displayData = document.querySelector(".display-data");
let updateData = document.querySelector(".update-data");

// containers
let displayContainer = document.querySelector(".data-container");

let employees = [];

function addEmployees() {
  employees.push({
    name: nameInput.value,
    id: idInput.value,
    salary: salaryInput.value,
  });
  console.log(employees);
}

let dataList = document.createElement("ul");
displayContainer.append(dataList);
function displayEmployees() {
  let dataListItem = document.createElement("li");
  dataList.appendChild(dataListItem);
  dataListItem.innerHTML += employees[0].name;
  employees.forEach(function (data, i) {
    console.log(data.name);
  });
}

function updateEmployees() {}
