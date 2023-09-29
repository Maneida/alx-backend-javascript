//function named createEmployeesObject that receives two arguments

export default function createEmployeesObject(departmentName, employees) {
  const employeesObj = {};
  employeesObj[departmentName] = employees;
  return employeesObj;
}
