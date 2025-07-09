let listaItens = document.getElementById('lista-produtos');
limpar()

function adicionar() {
  const produto = document.getElementById('produto').value.split(' - ');
  const qtdSelecionada = document.getElementById('quantidade');
  const quantidade = parseInt(qtdSelecionada.value);

  if(!quantidade) {    
    return alert("Informa a quantidade que deseja adicionar ao carrinho.")
  }

  novaSecao(quantidade, produto[0], produto[1]);
  
  const total = document.getElementById('valor-tota l');
  total.textContent = calculaTotal(quantidade, produto[1]);

  qtdSelecionada.value = "";
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