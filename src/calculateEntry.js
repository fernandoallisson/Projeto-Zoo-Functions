const data = require('../data/zoo_data');

const countEntrants = (array) => {
  let crianca = 0;
  let adulto = 0;
  let senhor = 0;

  array.forEach((element) => {
    if (element.age < 18) {
      crianca += 1;
    } else if (element.age < 50) {
      adulto += 1;
    } else {
      senhor += 1;
    }
  });

  return { child: crianca, adult: adulto, senior: senhor };
};

const calculateEntry = (...entrants) => {
  if (entrants[0] === undefined) {
    return 0;
  }
  const entrada = countEntrants(...entrants);
  const valorChild = data.prices.child;
  const valorAdult = data.prices.adult;
  const valorSenior = data.prices.senior;
  return entrada.child * valorChild + entrada.adult * valorAdult + entrada.senior * valorSenior;
};

module.exports = { calculateEntry, countEntrants };
