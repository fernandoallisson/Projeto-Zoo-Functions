const data = require('../data/zoo_data');

// Aqui eu retorno true se o id passado é um gerente.
const isManager = (id) => {
  const verif = data.employees.some(({ managers }) => managers.some((item) => item === id));
  if (!verif) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } return verif;
};

const nomes = (id) => {
  const nome = data.employees
    .filter(({ managers }) => managers.some((item) => item === id))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  return nome;
};

const getRelatedEmployees = (managerId) => {
  try {
    if (isManager(managerId)) {
      return nomes(managerId);
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = { isManager, getRelatedEmployees };
