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

    const brinqPessoa1 = brinquedosPessoa1.split(',');
    const brinqPessoa2 = brinquedosPessoa2.split(',');
    const animais = ordemAnimais.split(',');

    let animaisPessoa1 = [];
    let animaisPessoa2 = [];
    let resultadoFinal = [];

    //verificando se o animal é válido
    let animaisVistos = [];
    for (let i = 0; i < animais.length; i++) {
      let animal = animais[i];
      if(!listaAnimais[animal] || animaisVistos.includes(animal)) {
        return { erro: "Animal inváldo." }
      }
      animaisVistos.push(animal);
    }

    //verificando se os brinquedos são válidos
    let brinquedosVistosP1 = [];
    for(let i = 0; i < brinqPessoa1.length; i++) {
      let brinquedo = brinqPessoa1[i];
      if(brinquedosVistosP1.includes(brinquedo)){
        return { erro: 'Brinquedo duplicado.' }
      }
      brinquedosVistosP1.push(brinquedo);
    }

    let brinquedosVistosP2 = [];
    for(let i = 0; i < brinqPessoa2.length; i++) {
      let brinquedo = brinqPessoa2[i];
      if(brinquedosVistosP2.includes(brinquedo)){
        return { erro: 'Brinquedo duplicado.' }
      }
      brinquedosVistosP2.push(brinquedo);
    }



    if(animaisPessoa1.length > 3) {
      return { erro: 'Excedeu o limite de animais.' };
    } else {

    }

    if(animaisPessoa2.length > 3) {
      return { erro: 'Excedeu o limite de animais.' };
    }



  }
}

export { AbrigoAnimais as AbrigoAnimais };
