const data = require('../data/zoo_data');

const animaisDoZoo = data.species.filter(({ name }) => name).map(({ name }) => name); // Nomes dos animais

const diasDoZoo = Object.keys(data.hours); // Dias da semana.

const animal = (especie) => { // Retorna um array de dias que o animal está disponível.
  const filtro1 = data.species.find((elemento) => elemento.name === especie);
  if (filtro1) {
    return filtro1.availability;
  }
  return [];
};

const closed = (dia) => { // retorna a mensagem de que a segunda não está aberto. Ou Undefined
  if (dia === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  return undefined;
};

const semana = (dia) => { // Retorna um objeto com os animais que estão disponíveis e as horas;
  if (dia === 'Monday') {
    return closed(dia);
  }
  const horarioFuncionamento = data.hours[dia];
  if (horarioFuncionamento) {
    const horarioAbertura = horarioFuncionamento.open;
    const horarioFechamento = horarioFuncionamento.close;
    const animaisDisponiveis = data.species
      .filter(({ availability }) => availability.includes(dia))
      .map(({ name }) => name);
    return {
      [dia]: {
        officeHour: `Open from ${horarioAbertura}am until ${horarioFechamento}pm`,
        exhibition: animaisDisponiveis,
      },
    };
  }
};

const semParametros = (id) => { // Retorna um objeto com o que pede sobre não ter parâmetro ou parametro errado;
  if (!id || id.length > 0 || id === undefined) {
    const schedule = {};
    Object.keys(data.hours).forEach((day) => {
      const daySchedule = semana(day);
      schedule[day] = {
        officeHour: daySchedule[day].officeHour,
        exhibition: daySchedule[day].exhibition,
      };
    });
    return schedule;
  }
};

const juntaTudo = (string) => { // Junta tudo de cima
  if (animaisDoZoo.includes(string)) {
    return (animal(string));
  }
  if (diasDoZoo.includes(string)) {
    return semana(string);
  }
  return (semParametros(string));
};

const getSchedule = (scheduleTarget) => juntaTudo(scheduleTarget); // Resultado Final!

module.exports = getSchedule;
