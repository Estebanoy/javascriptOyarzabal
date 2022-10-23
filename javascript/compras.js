const panelCarrito = document.getElementById("contenedorCarrito");

let carritoGuardado = JSON.parse(localStorage.getItem("Carrito")) || [];

console.log(carritoGuardado)

const nuevoCarro = [];



const nombresCursos = carritoGuardado.forEach(element => {
    nuevoCarro.push(element.precio);
    const destructurar = ({nombre, precio}) =>{
        let liCarro = document.createElement("li")
        liCarro.innerText = ("Mapa= " + "'"+ nombre +"'" + " precio = " + precio+"$")
        panelCarrito.appendChild(liCarro);
        let botonBorrar = document.createElement("button")
        botonBorrar.innerText = "Borrar"
        liCarro.appendChild(botonBorrar)
        botonBorrar.addEventListener("click",() =>{
            swal({
                title: "Estas seguro que desedeas eliminar el curso " + "'" + element.nombre + "' ?",
                text: "Una vez eliminado no se podra acceder nuevamente al mismo",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    subtitulo.innerText = "";
                    const eliminados = carritoGuardado.splice(carritoGuardado.indexOf(element),1)
                    panelCarrito.removeChild(liCarro)
                    console.log(eliminados)
                    subtitulo.innerText = "Precio total = " + sumarPrecioCompras(...nuevoCarro) + "$";
                    swal("Usted a eliminado correctamente el curso de " + "'" + element.nombre + "'", {
                    icon: "success",
                    });
                    if (carritoGuardado.length === 0) {
                        subtitulo.innerText = "Regrese al inicio y continue comprando!"
                    }
                    console.log(nuevoCarro)
                    console.log(carritoGuardado)
                    
                }
              });
        
            
        })
    
    }
    destructurar(element);
    

});

function sumarPrecioCompras(...elArray){
    return elArray.reduce((acc,n) => acc + n, 0)
} 
let subtitulo = document.getElementById("subtitulo")
subtitulo.innerText = "Precio total = " + sumarPrecioCompras(...nuevoCarro) + "$";

        const main = document.getElementById('main')
        const ejemplos = document.getElementById("ejemplos")
        ejemplos.addEventListener('click', () =>{
            main.innerHTML = `
            <h1>Ejemplos de las guias</h1>
            <div>
            <section id="seccionesEjemplos">
                <article id="seccionTextos">
                    <h2>Utilizacion de utilidad</h2>
                    <p>Una de las claves para mejorar es el uso de la utilidad. Aqui te enseñaremos las granadas mas optimas con referencias y consejos.</p>
                </article>
                <article id="seccionImagen">
                  <img src="../img/ejemplos/imgHumoVentana.jpg" alt="">
                </article>
            </section>
            <section id="seccionesEjemplos">
                <article id="seccionImagen">
                  <img src="../img/ejemplos/menuDeComprasCsgo.jpg" alt="">
                </article>
                <article id="seccionTextos">
                  <h2>Administrar economia</h2>
                  <p>Es importante tener presente que la economia es un punto fundamental para la victoria, tanto la propia como la del rival</p>
                </article>
            </section>
            <section id="seccionesEjemplos">
                <article id="seccionTextos">
                    <h2>Rutinas</h2>
                    <p>Asi como en todos los juegos en equipo se le enseñara a realizar una practica solitaria para mejorar su rendimiento como tambien trabajando en equipo.</p>
                </article>
                <article id="seccionImagen">
                  <img src="../img/ejemplos/mapasDePracticaCsgo.jpg" alt="">
                </article>
            </section>
            </div>`
        })