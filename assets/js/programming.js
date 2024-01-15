/*
Código para el botón scroll top
*/
window.onscroll = function () {
  mostrarOcultarBoton();
};

function mostrarOcultarBoton() {
  var botonScroll = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonScroll.style.display = "block";
  } else {
    botonScroll.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para navegadores Chrome, Firefox, IE y Opera
}

/*
Código para destacar el li del nav cuando se muestra una sección
*/
function removerClaseActive() {
  const lista_ul = document.querySelector("nav ul");
  for (let i = 0; i < lista_ul.childElementCount; i++) {
    lista_ul.children[i].classList.remove("active-list");
  }
}

const lista_nav = document.querySelector("nav ul");

for (const li of lista_nav.children) {
  li.children[0].addEventListener("click", (evento) => {
    const li_element_selected = evento.target;

    removerClaseActive();
    li_element_selected.parentElement.classList.add("active-list");
  });
}

/*
Codigo para el menu hamburguesa
*/
function toggleNavbar() {
  const navbar_list = document.querySelector("nav ul");
  navbar_list.classList.toggle("show_nav");
}
