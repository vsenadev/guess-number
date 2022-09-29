window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoChute = document.getElementById('chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event){
    palpite = event.results[0][0].transcript;
    exibePalpiteNaTela(palpite);
    verificaPalpite(palpite);
}

function exibePalpiteNaTela(palpite){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${palpite}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());