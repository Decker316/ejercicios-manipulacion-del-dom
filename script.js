const h1 = document.querySelector('h1');
const input = document.querySelector('input');

h1.innerHTML = "Patito <br> feo";
console.log(h1.getAttribute("pantalla"));
h1.setAttribute("class", "patito_gris");

input.value = "0123";
input.placeholder = "Escribe otras cosas";

const pid = document.getElementById('pid');

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');

pid.innerHTML = "";
pid.append(img);