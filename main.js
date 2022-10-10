const cartoes = document.querySelectorAll('.cartao-memoria');

function virarCartao() {
    this.classList.toggle('flip');
}

cartoes.forEach(cartao => cartao.addEventListener('click', virarCartao));