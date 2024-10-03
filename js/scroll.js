window.onscroll = function() {
  scrollMenu()
  scrollTopo()
};

// Menu Fixo
let botaoMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-lanches");
let width = screen.width;

function scrollMenu() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    if (width < 768) {
      menu.style.position = "fixed";
      menu.style.top = "40px";
      menu.style.left = "0";
      menu.style.right = "0";
      menu.style.width = "100%";
      botaoMenu.style.position = "fixed";
      botaoMenu.style.top = "0";
      botaoMenu.style.left = "0";
      botaoMenu.style.right = "0";
      botaoMenu.style.width = "100%";
    } else {
      menu.style.position = "fixed";
      menu.style.top = "0";
      menu.style.left = "0";
      menu.style.right = "0";
      menu.style.width = "100%";
    }
  } else {
    menu.style.position = "relative";
    botaoMenu.style.position = "relative";
    menu.style.top = "0";
  }
}

// Botão topo
let botaoTopo = document.getElementById("btnTopo");

function scrollTopo() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
}

function topo() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE e Opera
}