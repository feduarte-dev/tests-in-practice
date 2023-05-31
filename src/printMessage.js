let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let teste = {};

const validaObj = (characterInfo) => {
  if (!characterInfo.personagem) {
    throw new Error('objeto inválido');
  }
};

const printMessage = (characterInfo) => {
  try {
    validaObj(characterInfo);
    let result = `Boas vindas, ${characterInfo.personagem}`;
    return result;
  } catch (error) {
    return error.message;
  }
};

console.log(printMessage(teste));

module.exports = { info, teste, validaObj, printMessage };
