function verificaPalpite(palpite){
    const numero = +palpite

    if (palpite === 'game over'){
        document.body.classList.add('game-over')
        document.body.innerHTML = `
        <main>
            <h1>GAME OVER!</h1>
        </main>
        `
    }

    if (Number.isNaN(numero)){
        elementoChute.innerHTML = `
        <span class="box">${palpite}</span>
        <div>Valor invalido</div>`;
        return
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML = `<div>Número tem que estar entre ${menorValor} e ${maiorValor}</div>
        `;
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</>

        <button id="jogar-novamente" class="btn-jogar">JOGAR NOVAMENTE</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function numeroForMaiorOuMenorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})