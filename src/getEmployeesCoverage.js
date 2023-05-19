const data = require('../data/zoo_data');

const teste = { name: 'Sharonda', id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' };

const colaoradores = data.employees;

const fullName = colaoradores.map(({ firstName, lastName }) => [firstName, lastName]); // Array de nomes de colaboradores;

const retorno = (obj) => { // Retorna o valor ou do id ou do nome, caso tenham, se não, undefined
  if ('name' in obj) {
    const nome = Object.values(obj.name).join('');
    return nome;
  }
  if ('id' in obj) {
    const id = Object.values(obj.id).join('');
    return id;
  }
  return undefined;
}; // Se for undefined vai para a função de juntar tudo.

const verificacao = (string) => {
  
};
console.log(verificacao(teste));
const getEmployeesCoverage = () => {
  // seu código aqui
};

module.exports = getEmployeesCoverage;
