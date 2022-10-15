const cartoes = document.querySelectorAll('.cartao-memoria');
const cardFlip = new Audio('/assets/sounds/FlipSound.mp3')
const jacaTorta = new Audio('/assets/sounds/JacaTorta.mp3')
const aduide = new Audio('/assets/sounds/Aduide.mp3')

let cartaoFoiVirado = false;
let travaJogo = false
let primeiroCartao, segundoCartao;

function virarCartao() {
    cardFlip.play();
    cardFlip.playbackRate = 2;
    if (travaJogo) return;
    if (this === primeiroCartao) return;
    this.classList.add('flip');

    if (!cartaoFoiVirado) {
        cartaoFoiVirado = true;
        primeiroCartao = this;
        return;
    }

    segundoCartao = this;
    travaJogo = true;

    checarSeIgual();
}

function checarSeIgual() {
    let saoIguais = primeiroCartao.dataset.estrutura === segundoCartao.dataset.estrutura;
    saoIguais ? desativaCartas() : desviraCartao(jacaTorta.play());
}

function desativaCartas() {
    aduide.play();
    primeiroCartao.removeEventListener('click', virarCartao);
    segundoCartao, removeEventListener('click', virarCartao);
    resetarJogo();
}

function desviraCartao() {
    setTimeout(() => {
        primeiroCartao.classList.remove('flip');
        segundoCartao.classList.remove('flip');
        resetarJogo();
    }, 1500);
}

function resetarJogo() {
    [cartaoFoiVirado, travaJogo] = [false, false];
    [primeiroCartao, segundoCartao] = [null, null];
}

(function embaralhar() {
    cartoes.forEach(cartao => {
        let posicaoAleatoria = Math.floor(Math.random() * 12);
        cartao.style.order = posicaoAleatoria;
    });
})();

cartoes.forEach(cartao => cartao.addEventListener('click', virarCartao));