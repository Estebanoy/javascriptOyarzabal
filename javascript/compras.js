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
                    const eliminados = carritoGuardado.splice(carritoGuardado.indexOf(element),1)
                    panelCarrito.removeChild(liCarro)
                    console.log(eliminados)
                    subtitulo.innerText = "Precio total = " + sumarPrecioCompras(...nuevoCarro) + "$";
                    swal("Usted a eliminado correctamente el curso de " + "'" + element.nombre + "'", {
                    icon: "success",
                    });
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

