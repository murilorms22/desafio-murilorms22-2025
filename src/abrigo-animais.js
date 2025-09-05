class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const listaAnimais = {
      'Rex': { tipo: 'cão', brinquedos: ['RATO, BOLA']},
      'Mimi': { tipo: 'gato', brinquedos: ['BOLA, LASER']},
      'Fofo': { tipo: 'gato', brinquedos: ['BOLA, RATO, LASER']},
      'Zero': { tipo: 'gato', brinquedos: ['RATO, BOLA']},
      'Bola': { tipo: 'cão', brinquedos: ['CAIXA, NOVELO']},
      'Bebe': { tipo: 'cão', brinquedos: ['LASER, RATO, BOLA']},
      'Loco': { tipo: 'jabuti', brinquedos: ['SKATE, RATO']},
    }

    const pessoa1 = brinquedosPessoa1.split(',');
    const pessoa2 = brinquedosPessoa2.split(',');
    const animais = ordemAnimais.split(',');

    

  }
}

export { AbrigoAnimais as AbrigoAnimais };
