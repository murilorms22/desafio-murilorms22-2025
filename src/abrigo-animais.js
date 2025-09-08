class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const listaAnimais = {
      'Rex': { nome: 'Rex', tipo: 'cão', brinquedos: ['RATO', 'BOLA']},
      'Mimi': { nome: 'Mimi', tipo: 'gato', brinquedos: ['BOLA', 'LASER']},
      'Fofo': { nome: 'Fofo', tipo: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER']},
      'Zero': { nome: 'Zero', tipo: 'gato', brinquedos: ['RATO', 'BOLA']},
      'Bola': { nome: 'Bola', tipo: 'cão', brinquedos: ['CAIXA', 'NOVELO']},
      'Bebe': { nome: 'Bebe', tipo: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA']},
      'Loco': { nome: 'Loco', tipo: 'jabuti', brinquedos: ['SKATE', 'RATO']},
    }

    const brinqPessoa1 = brinquedosPessoa1.split(',');
    const brinqPessoa2 = brinquedosPessoa2.split(',');
    const animaisEntrada = ordemAnimais.split(',');

    let animaisPessoa1 = [];
    let animaisPessoa2 = [];
    let resultadoFinal = [];

    //verificando se o animal é válido
    let animaisVerificados = [];
    for (let i = 0; i < animaisEntrada.length; i++) {
      let animal = animaisEntrada[i];
      if(!listaAnimais[animal] || animaisVerificados.includes(animal)) {
        return { erro: `Animal inválido` }
      }
      animaisVerificados.push(animal);
    }

    //verificando se os brinquedos são válidos
    let brinquedosVerificadosP1 = [];
    for(let i = 0; i < brinqPessoa1.length; i++) {
      let brinquedo = brinqPessoa1[i];
      if(brinquedosVerificadosP1.includes(brinquedo)){
        return { erro: `Brinquedo duplicado` }
      }
      brinquedosVerificadosP1.push(brinquedo);
    }

    let brinquedosVerificadosP2 = [];
    for(let i = 0; i < brinqPessoa2.length; i++) {
      let brinquedo = brinqPessoa2[i];
      if(brinquedosVerificadosP2.includes(brinquedo)){
        return { erro: `Brinquedo duplicado` }
      }
      brinquedosVerificadosP2.push(brinquedo);
    }

    //verificando se a pessoa 1 pode adotar
    for (const nomeAnimal of animaisEntrada) {
      const animal = listaAnimais[nomeAnimal];
      
      let pessoa1PodeAdotar = false;
      let pessoa2PodeAdotar = false;

      if (animaisPessoa1.length < 3) {
        let temOsBrinquedos = true;
        
        //regra especial para o jabuti
        if (animal.nome === 'Loco') {
          if (animaisPessoa1.length === 0) {
            temOsBrinquedos = false;
          } else {
            for (const brinquedo of animal.brinquedos) {
              if (!brinqPessoa1.includes(brinquedo)) {
                temOsBrinquedos = false;
                break;
              }
            }
          }
        } else { //regras padrões para o restante dos animais
          let brinquedosDisponiveis = [...brinqPessoa1];
          for (const brinquedo of animal.brinquedos) {
            const indice = brinquedosDisponiveis.indexOf(brinquedo);
            if (indice === -1) {
              temOsBrinquedos = false;
              break;
            } else {
              brinquedosDisponiveis = brinquedosDisponiveis.slice(indice + 1);
            }
          }
        }

        if (temOsBrinquedos && animal.tipo === 'gato') {
          for (const brinquedo of animal.brinquedos) {
            if (brinquedosGatoUsadosP1.includes(brinquedo)) {
              temOsBrinquedos = false;
              break;
            }
          }
        }
        
        if (temOsBrinquedos) {
          pessoa1PodeAdotar = true;
        }
      }

      //verificando se a pessoa 2 pode adotar
      if (animaisPessoa2.length < 3) {
        let temOsBrinquedos = true;

        if (animal.nome === 'Loco') {
          if (animaisPessoa2.length === 0) {
            temOsBrinquedos = false;
          } else {
            for (const brinquedo of animal.brinquedos) {
              if (!brinqPessoa2.includes(brinquedo)) {
                temOsBrinquedos = false;
                break;
              }
            }
          }
        } else {
          let brinquedosDisponiveis = [...brinqPessoa2];
          for (const brinquedo of animal.brinquedos) {
            const indice = brinquedosDisponiveis.indexOf(brinquedo);
            if (indice === -1) {
              temOsBrinquedos = false;
              break;
            } else {
              brinquedosDisponiveis = brinquedosDisponiveis.slice(indice + 1);
            }
          }
        }
        
        if (temOsBrinquedos && animal.tipo === 'gato') {
          for (const brinquedo of animal.brinquedos) {
            if (brinquedosGatoUsadosP2.includes(brinquedo)) {
              temOsBrinquedos = false;
              break;
            }
          }
        }

        if (temOsBrinquedos) {
          pessoa2PodeAdotar = true;
        }
      }

}

export { AbrigoAnimais as AbrigoAnimais };
