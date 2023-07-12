// Employee array to store added employees
let employees = [];

// Function to add an employee
function addEmployee(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const professionInput = document.getElementById("profession");
  const ageInput = document.getElementById("age");

  const name = nameInput.value;
  const profession = professionInput.value;
  const age = parseInt(ageInput.value);

  // Check if all fields are filled
  if (name && profession && age) {
    // Generate a unique ID for the employee
    const id = Date.now();

    // Create the employee object
    const employee = { id, name, profession, age };

    // Add the employee to the array
    employees.push(employee);

    // Display success message
    const successMessage = document.getElementById("successMessage");
    successMessage.innerText = "Employee added successfully.";
    successMessage.className = "success";

    // Reset the form
    nameInput.value = "";
    professionInput.value = "";
    ageInput.value = "";
  } else {
    // Display error message
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = "Please fill all required fields.";
    errorMessage.className = "error";
  }

  // Update the employee list
  updateEmployeeList();
}

// Function to delete an employee
function deleteEmployee(id) {
  // Find the index of the employee with the given ID
  const index = employees.findIndex((employee) => employee.id === id);

  if (index !== -1) {
    // Remove the employee from the array
    employees.splice(index, 1);

    // Update the employee list
    updateEmployeeList();
  }
}

// Function to update the employee list
function updateEmployeeList() {
  const employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = "";

  // Loop through the employees array and create HTML elements for each employee
  employees.forEach((employee) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>Name:</strong> ${employee.name}<br>
      <strong>Profession:</strong> ${employee.profession}<br>
      <strong>Age:</strong> ${employee.age}<br>
      <button onclick="deleteEmployee(${employee.id})">Delete</button>
      <hr>
    `;

    employeeList.appendChild(div);
  });
}

// Event listener for the form submission
const form = document.getElementById("employeeForm");
form.addEventListener("submit", addEmployee);
