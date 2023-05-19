const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it(('Para os argumentos Monday deve retornar a string The zoo is closed'), () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it(('Para os argumentos Monday 08:00-AM deve retornar a string The zoo is closed'), () => {
    expect(getOpeningHours('Monday', '08:00-AM')).toBe('The zoo is closed');
  });
  it(('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is closed'), () => {
    expect(getOpeningHours('Tuesday', '08:00-AM')).toBe('The zoo is open');
  });
  it(('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: The day must be valid. Example: Monday'), () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it(('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: The abbreviation must be \'AM\' or \'PM\''), () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it(('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: The hour should represent a number'), () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it(('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: The minutes should represent a number'), () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it(('Para os argumentos Sunday e 19:10-AM deve lançar uma exceção com a mensagem: The hour must be between 0 and 12'), () => {
    expect(() => getOpeningHours('Sunday', '29:10-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it(('Para os argumentos Sunday e 19:64-AM deve lançar uma exceção com a mensagem: The minutes must be between 0 and 59'), () => {
    expect(() => getOpeningHours('Sunday', '09:60-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
