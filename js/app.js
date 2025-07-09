let listaItens = document.getElementById('lista-produtos');

function adicionar() {
  const produto = document.getElementById('produto').value.split(' - ');
  const qtdSelecionada = parseInt(document.getElementById('quantidade').value);
  
  novaSecao(qtdSelecionada, produto[0], produto[1]);
  
  const total = document.getElementById('valor-total');
  total.textContent = calculaTotal(qtdSelecionada, produto[1]);
}

function novaSecao(quantidade, item, valor){
  let novaSecao = document.createElement('section');
  novaSecao.classList.add("carrinho__produtos__produto");
  novaSecao.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${item} <span class="texto-azul">${valor}</span>`;
  
  listaItens.appendChild(novaSecao);
}

function calculaTotal(quantidade, valor){
  let elementoTotal = document.getElementById('valor-total');
  let valorTotal = Number(elementoTotal.textContent.replace(/[^0-9]/g, ""));
  let valorFormatado = Number(valor.replace(/[^0-9]/g, ""));
  let novoValorTotal = valorTotal + (quantidade * valorFormatado);

  return `R$${novoValorTotal.toLocaleString('pt-BR')}`;
}

function limpar() {
  let limparTotal = document.getElementById('valor-total');
  limparTotal.textContent = 'R$0';
  let produtoCarrinho = listaItens.querySelectorAll('.carrinho__produtos__produto');
  produtoCarrinho.forEach(produtoCarrinho => {
    produtoCarrinho.remove()
  });
}