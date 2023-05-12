const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }
  return (data.species
    .filter(({ id }) => ids
      .some((eleme) => eleme === id)));
};

module.exports = getSpeciesByIds;
