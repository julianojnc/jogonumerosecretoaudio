function verificaChuteValorValido(chute) {
  const numero = +chute;

  if (chuteValorValido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
    return
  }

  if (numeroMaiorMenorValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}!</div>`;
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>O número secreto era ${numeroSecreto}!!</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `        
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-long"></i></div>
        `;
  } else {
    elementoChute.innerHTML += `        
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-long"></i></div>
        `;
  }
}

function chuteValorValido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorMenorValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});
