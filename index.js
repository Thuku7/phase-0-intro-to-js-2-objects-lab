// Write your solution in this file!
const employee = {
  name: "",
  streeAddress: "",
};


function beforeEach() {
  for(const key in employee) {
    delete employee[key];
  }
  employee.name = 'Sam';
}




function updateEmployeeWithKeyAndValue(employee,key,value) {
  beforeEach();
  const newEmployee = {...employee}
  newEmployee[key] = value
  return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
      beforeEach();
      employee[key] = value;
      return employee
}


function deleteFromEmployeeByKey(employee,key) {
  beforeEach();
  const newEmployee = {...employee}
  delete newEmployee[key]
  return newEmployee
}


function destructivelyDeleteFromEmployeeByKey(employee,key) {
  beforeEach();
  delete employee[key]
  return employee
}

