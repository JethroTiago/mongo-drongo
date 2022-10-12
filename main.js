const cartoes = document.querySelectorAll('.cartao-memoria');

let cartaoFoiVirado = false;
let primeiroCartao, segundoCartao;

function virarCartao() {
    this.classList.add('flip');

    if(!cartaoFoiVirado){
        cartaoFoiVirado = true;
        primeiroCartao = this;
    }
}

cartoes.forEach(cartao => cartao.addEventListener('click', virarCartao));