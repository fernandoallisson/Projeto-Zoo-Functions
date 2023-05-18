const data = require('../data/zoo_data');

const getEmployeeByID = (parametroID) => { // Retorna o objeto do ID passado! caso não seja o id correto, {};
  const matchingEmployers = data.employees.filter(({ id }) => id === parametroID);
  if (matchingEmployers.length === 0) {
    return {};
  } return matchingEmployers[0];
};

const findSpecies = (parametroID) => getEmployeeByID(parametroID).responsibleFor[0]; // Já pega o primeiro animal do empregado.

const Oldest = (idAnimal) => { // Retorna o objeto do animal de determinado ID;
  const animal = data.species.filter(({ id }) => id === idAnimal);
  return animal;
};

const juntaTudo = (idEmpl) => { // Retorna apenas o objeto do animal que o dono é responsável;
  const result = Oldest(findSpecies(idEmpl));
  return result;
};

const maiorOld = (id) => {
  const juntado = juntaTudo(id)[0];
  const result = juntado.residents.reduce((max, especie) => {
    if (max.age > especie.age) {
      return max;
    }
    return especie;
  }, 0);
  return Object.values(result);
};

const getOldestFromFirstSpecies = (id) => maiorOld(id);

module.exports = getOldestFromFirstSpecies;
