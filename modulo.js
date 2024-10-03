import lanches from '/js/lanches.js';

const adicionarCombos = () => {
  return lanches.combos.map((combo) => {
    return (
      `    
      <li>
        <img src="${combo.foto}" alt="${combo.nome}">
        <div class="conteudo">
          <h1>${combo.nome}</h1>
          <p>${combo.descricao}</p>
          <h2>${combo.preco}</h2>
          <button onclick="addCarrinho()" title="Adicionar lanche ao carrinho."><i class="fa-solid fa-cart-plus"></i>
            Adicionar</button>
        </div>
      </li>
    `
    )
  }).join('')
}

const adicionarBebidas = () => {
  return lanches.bebidas.map((bebida) => {
    return (
      `    
      <li>
        <img src="${bebida.foto}" alt="${bebida.nome}">
        <div class="conteudo">
          <h1>${bebida.nome}</h1>
          <p>${bebida.descricao}</p>
          <h2>${bebida.preco}</h2>
          <button onclick="addCarrinho()" title="Adicionar lanche ao carrinho."><i class="fa-solid fa-cart-plus"></i>
            Adicionar</button>
        </div>
      </li>
    `
    )
  }).join('')
}

const adicionarBurguers = () => {
  return lanches.burguers.map((burguer) => {
    return (
      `    
      <li>
        <img src="${burguer.foto}" alt="${burguer.nome}">
        <div class="conteudo">
          <h1>${burguer.nome}</h1>
          <p>${burguer.descricao}</p>
          <h2>${burguer.preco}</h2>
          <button onclick="addCarrinho()" title="Adicionar lanche ao carrinho."><i class="fa-solid fa-cart-plus"></i>
            Adicionar</button>
        </div>
      </li>
    `
    )
  }).join('')
}

const adicionarBatatas = () => {
  return lanches.batatas.map((batata) => {
    return (
      `    
      <li>
        <img src="${batata.foto}" alt="${batata.nome}">
        <div class="conteudo">
          <h1>${batata.nome}</h1>
          <p>${batata.descricao}</p>
          <h2>${batata.preco}</h2>
          <button onclick="addCarrinho()" title="Adicionar lanche ao carrinho."><i class="fa-solid fa-cart-plus"></i>
            Adicionar</button>
        </div>
      </li>
    `
    )
  }).join('')
}

const adicionarSobremesas = () => {
  return lanches.sobremesas.map((sobremesa) => {
    return (
      `    
      <li>
        <img src="${sobremesa.foto}" alt="${sobremesa.nome}">
        <div class="conteudo">
          <h1>${sobremesa.nome}</h1>
          <p>${sobremesa.descricao}</p>
          <h2>${sobremesa.preco}</h2>
          <button onclick="addCarrinho()" title="Adicionar lanche ao carrinho."><i class="fa-solid fa-cart-plus"></i>
            Adicionar</button>
        </div>
      </li>
    `
    )
  }).join('')
}

document.getElementById('combos').insertAdjacentHTML('afterend', adicionarCombos(combos));

document.getElementById('burguers').insertAdjacentHTML('afterend', adicionarBurguers(burguers));

document.getElementById('batatas').insertAdjacentHTML('afterend', adicionarBatatas(batatas));

document.getElementById('bebidas').insertAdjacentHTML('afterend', adicionarBebidas(bebidas));

document.getElementById('sobremesas').insertAdjacentHTML('afterend', adicionarSobremesas(sobremesas));