// exercise-bonus.test.js

const {
  searchEmployee,
  validaId,
  validaInfo,
} = require('../src/searchEmployee');

describe('5 - Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando `a função` e `os testes` para essa função', () => {
  it('Testa se searchEmployee é uma função', () => {
    expect(searchEmployee('4456-4', 'firstName')).toBe('Leila');
  });

  it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  });

  it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });

  it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
    expect(searchEmployee('1256-4', 'specialities')).toEqual([
      'Hooks',
      'Context API',
      'Tailwind CSS',
    ]);
  });
  // Faz sentido eu trabalhar com a função de validação ao invés da principal
  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => {
      validaId('00');
    }).toThrow(new Error('ID não identificado'));
  });

  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => {
      validaId();
    }).toThrow();
    expect(() => {
      validaInfo();
    }).toThrow();
  });

  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => {
      validaInfo('adress');
    }).toThrow(new Error('Informação indisponível'));
  });
});
