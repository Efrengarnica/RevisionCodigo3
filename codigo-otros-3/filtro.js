// Tenemos un li de productos

const productos = [  //Se corrigió el tipo para que apareciera Zapato en vez de zapato y también con Bota en vez de bota
  {nombre: "Zapato negro", tipo: "Zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "Zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "Bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "Bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "Zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//const li = document.getElementsByName("lista-de-productos")
// Corregido: Seleccionar el primer elemento con el nombre "lista-de-productos"
//Recordar que es getElementById ya que lista-de-producto es un id
const li = document.getElementById("lista-de-productos");

const $i = document.querySelector('.input'); //Se agrego la clase al boton llamada input en HTML


for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

//displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }  
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
  //displayProductos(productosFiltrados)
}

