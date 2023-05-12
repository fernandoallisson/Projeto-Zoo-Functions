const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const matchingEmployers = data.employees.filter(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
  if (matchingEmployers.length === 0) {
    return {};
  } return matchingEmployers;
};

module.exports = getEmployeeByName;
