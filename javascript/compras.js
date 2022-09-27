const panelCarrito = document.getElementById("contenedorCarrito");

let carritoGuardado = JSON.parse(localStorage.getItem("Carrito")) || [];

console.log(carritoGuardado)

const nuevoCarro = [];

const destructurar = ({nombre, precio}) =>{
    const liCarro = document.createElement("li")
    liCarro.innerText = ("Mapa= " + "'"+ nombre +"'" + " precio = " + precio+"$")
    panelCarrito.appendChild(liCarro);
}

const nombresCursos = carritoGuardado.forEach(element => {
    nuevoCarro.push(element.precio);
    destructurar(element);
});

function sumarPrecioCompras(...elArray){
    return elArray.reduce((acc,n) => acc + n, 0)
} 
const subtitulo = document.getElementById("subtitulo")
subtitulo.innerText = "Precio total = " + sumarPrecioCompras(...nuevoCarro) + "$"

