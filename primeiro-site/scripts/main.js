let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/car.png') {
      minhaImagem.setAttribute ('src','imagens/car2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/car.png');
    }
}
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');
function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Ossbor é confiável, ' + meuNome;
  }
  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Ossbor é confiável, ' + nomeGuardado;
  }
  meuBotao.onclick = function() { defineNomeUsuario();
  }
