const data = require('../data/zoo_data');

// Essa função retorna apena o número de espécie de um determinado objeto.
const contadorDeAnimaisPorEspecies = (...species) => {
  const paramentroSexo = species[0].sex;
  const paramentroSpec = species[0].species;
  const ObjAnimal = data.species.filter(({ name }) => name === paramentroSpec)[0];
  const contarSex = ObjAnimal.residents.filter(({ sex }) => sex === paramentroSexo);

  if (paramentroSexo) {
    return contarSex.length;
  }
  return ObjAnimal.residents.length;
};

const countAnimals = (...animal) => {
  if (animal[0] === undefined) {
    const animaisFiltrados = data.species.reduce((obje, { name, residents }) => {
      const obj = { ...obje };
      obj[name] = residents.length;
      return obj;
    }, {});
    return animaisFiltrados;
  } return contadorDeAnimaisPorEspecies(...animal);
};

module.exports = countAnimals;
