const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, idade) => {
  const animais = data.species.find(({ name }) => name === animal);
  const verificacao = animais.residents.every(({ age }) => age >= idade);
  return verificacao;
};

module.exports = getAnimalsOlderThan;
