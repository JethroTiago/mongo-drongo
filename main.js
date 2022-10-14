const cartoes = document.querySelectorAll('.cartao-memoria');

let cartaoFoiVirado = false;
let primeiroCartao, segundoCartao;

function virarCartao() {
    this.classList.add('flip');

    if(!cartaoFoiVirado){
        cartaoFoiVirado = true;
        primeiroCartao = this;
        return;
    }

    segundoCartao = this;
    cartaoFoiVirado = false;

    checarSeIgual();

    function checarSeIgual() {
        if(primeiroCartao.dataset.estrutura === segundoCartao.dataset.estrutura) {
            disativaCartas();
            return;
        }

    desviraCartao();

    }

    function desativaCartas() {
        primeiroCartao.removeEventListner('click', flipCard);
        segundoCartao,removeEventListener('click', flipCard)
    }

    function desativaCartas() {
        setTimeout(() => {
            primeiroCartao.classList.remove('flip');
            segundoCartao.classList.remove('flip');
        }, 1500);
    }
}

cartoes.forEach(cartao => cartao.addEventListener('click', virarCartao));