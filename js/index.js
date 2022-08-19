class Colecciones {
  constructor(id, nombre, precio, producto) {
      this.id = id,
      this.nombre = nombre,
      this.precio = precio,
      this.producto = producto
  }
};

const coleccion = [];

function listaProductos() {
coleccion.push(new Colecciones(1,  "REMERA ROJA", 6000, "remera"))
coleccion.push(new Colecciones(2,  "REMERA NEGRA", 6500, "remera"))
coleccion.push(new Colecciones(3,  "CAMISA FLOREADA", 9000, "camisa"))
coleccion.push(new Colecciones(4,  "BUZO CON CAPUCHA", 7000, "buzo"))
coleccion.push(new Colecciones(5,  "PANTALON CHINO", 6000, "pantalon"))
coleccion.push(new Colecciones(6,  "PANTALON CAMUFLADO", 6000, "pantalon"))
}

// let saludo = alert("Bienvenido a Rivia Clothing");
listaProductos();
const carrito = [];

function agregarProducto() {
let productos = parseInt(prompt("Seleccione que producto necesita por su numero"));
const resultado = coleccion.find((elemento) => elemento.id === productos);
carrito.push(resultado)
console.table(resultado);
}


function agregaMas() {
let sumar = confirm("Si quiere agregar ACEPTAR. \nÓ seleccione CANCELAR para ver su total");
if (sumar) {
  agregarProducto()
  let total = carrito.reduce((acc, el) => acc + el.precio, 0)
  console.log("El total de los productos es: $", total)
}else {
  let total = carrito.reduce((acc, el) => acc + el.precio, 0)
  console.log("El total de los productos es: $", total)
}
}
// Manipulando el DOM...
const btn = document.getElementsByClassName("btn");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");

const lista = document.getElementById("lista");
//console.log(lista)

const prendas = ["Poleras", "Jeans", "Sweaters"];

prendas.forEach((item) => {
  //console.log(item)
  const li = document.createElement("li");
  li.textContent = item;

  lista.appendChild(li);
});


function cambiarTitulos() {
  titulo.innerText = "Interactuar con HTML";
  subtitulo.innerText = "Coleccion Verano!!"
}

function otraLista() {
  const lista = document.getElementById("lista")
  lista.innerHTML = "<li>Ojotas</li><li>short</li><li>Mallas de Baño</li><li>Muscolosas</li>"
} 


document.addEventListener("keydown", precionaEnter)

function precionaEnter(event) {
   const tecla = event.key;
   
   if(tecla == "Enter") {
    otraLista()
   }
}

const parrafo = document.querySelector("p");
const boton = document.querySelector("button");

let contador = 0;

boton.addEventListener('click', () => {
  contador++;
  parrafo.textContent = contador;
})

