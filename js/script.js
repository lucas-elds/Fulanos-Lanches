function clickCardapio() {
  let menu = document.getElementById("menu-lanches");
  let botao = document.getElementById("btn-menu");
  let seta = document.querySelector(".fa-solid");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
    botao.style.backgroundColor = "#000000";
    seta.classList.remove("fa-caret-up");
    seta.classList.add("fa-caret-down");
  } else {
    menu.style.display = "flex";
    botao.style.backgroundColor = "#cc0000";
    seta.classList.remove("fa-caret-down");
    seta.classList.add("fa-caret-up");
  }
}


let qntdCarrinho = 0;
let contador = document.getElementById("cont-carrinho");

function addCarrinho() {
  qntdCarrinho += 1;
  contador.textContent = qntdCarrinho;
}