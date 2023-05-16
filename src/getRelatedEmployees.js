const data = require('../data/zoo_data');

// Aqui eu retorno true se o id passado é um gerente.
const isManager = (id) => data.employees.some(({ managers }) => managers.includes(id));

const nomes = (id) => {
  const nome = data.employees
    .filter(({ managers }) => managers.some((item) => item === id))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  return nome;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return nomes(managerId);
};

module.exports = { isManager, getRelatedEmployees };
