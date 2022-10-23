const cursos = [
    {id: 1, nombre:"mirage", precio:15000},
    {id: 2, nombre:"overpass", precio:26000},
    {id: 3, nombre:"dust2", precio:20000},
    {id: 4, nombre:"inferno", precio:20000},
    {id: 5, nombre:"vertigo", precio:27000},
    {id: 6, nombre:"train", precio:30000},
    {id: 7, nombre:"nuke", precio:28000},
    {id: 8, nombre:"ancient", precio:32000},
];



const btnBuscar = document.getElementById('btnBuscar');
const input = document.getElementById('ingreso');
const section = document.getElementById('seccion1');
const carrito = [];
const carritoContenedor = document.getElementById("seccion2");

function mostrarTodo(){
    section.innerHTML="";
    cursos.forEach(element =>{
    let nuevosDivs = document.createElement('div');
    nuevosDivs.className = "card divCards";
                nuevosDivs.innerHTML =
                `
                <img src="./img/${element.nombre}.jpg"  class="card.img" alt="">
                <div class="card-img-overlay">
                    <h3 class="card-title">Mapa : ${element.nombre}</h5>
                    <p class="card-text">Precio : ${element.precio} $</p>
                    <button class="btnComprar" id="btnComprar${element.id}">Sumar al carrito
                    </button>
                </div>
                `
                section.appendChild(nuevosDivs);

                const botonProducto = document.getElementById(`btnComprar${element.id}`)

                botonProducto.addEventListener('click', ()=>{
                    Toastify({
                        text:"Acaba de comprar el curso de " + element.nombre,
                        duration: 3000,
                        style: {
                            background: "linear-gradient(to right, #404467, rgb(216 219 13))",
                          },
                    }).showToast();
                    sumarAlCarrito(element.id)
                    actCarrito();
                })
                
});}

function filtrarCursosNombres(filtrar){
    section.innerHTML="";
    const filtrador = cursos.filter((element) =>{
        if(element.nombre.includes(filtrar)){ 
        let nuevosDivs = document.createElement('div');
        nuevosDivs.className = "divCards";
        nuevosDivs.innerHTML =
        `
        <img src="./img/${element.nombre}.jpg" alt="">
        <ul id="numeroCurso${element.id}">
            <li>Nombre de mapa : ${element.nombre}</li>
            <li>Precio : ${element.precio} $</li>
            <button class="btnComprar" id="btnComprar${element.id}">Sumar al carrito
            </button>
        </ul>
        `
        section.appendChild(nuevosDivs);

        const botonProducto = document.getElementById(`btnComprar${element.id}`)

        botonProducto.addEventListener('click', ()=>{
            Toastify({
                        text:"Acaba de comprar el curso de " + element.nombre,
                        duration: 3000,
                        style: {
                    background: "linear-gradient(to right, #404467, rgb(213 196 0))",
                          },
                    }).showToast();
            sumarAlCarrito(element.id)
            actCarrito();
        })
        }
        
    })
    
    return filtrador;
}

mostrarTodo();
console.log(carrito)



const sumarAlCarrito = (idProducto) =>{
    const item = cursos.find((element) => element.id === idProducto)
    carrito.push(item)
    console.log(carrito)
    actCarrito();
}

const eliminarProducto = (idProducto) =>{
    const itemBorrado = carrito.find((element) => element.id === idProducto)
    const indice = carrito.indexOf(itemBorrado);
    carrito.splice(indice,1);
    console.log(carrito)
    actCarrito();
    if(carrito.length === 0){
        carritoContenedor.innerHTML=`<h3>Su carrito esta vacio!</h3>`
    }   
     
}
const tituloTabla = document.createElement('h3');
const tablaContainer = document.getElementById('seccion2')
const comprarTodo = document.createElement('button')
comprarTodo.innerText = "COMPRAR"
const tablaCarro = document.createElement('tbody')
const actCarrito = () =>{
    carritoContenedor.innerHTML="";
    const listaCarro = document.createElement("table")
    listaCarro.className= "table mostrarCompra";
    carritoContenedor.appendChild(listaCarro);
    tablaCarro.innerHTML= ``;
    const totalCarrito = carrito.reduce((acc,producto) => acc + producto.precio,0)
    tituloTabla.innerText= ``;
    listaCarro.innerHTML=`<thead>
    <tr>
    <td>#</td> 
    <td>Nombre de Curso</td>
    <td>Precio</td>
    </tr>   
    </thead>`;
    listaCarro.appendChild(tablaCarro)
    carrito.forEach((element)=>{
        const nuevosItems = document.createElement("tr")
        nuevosItems.innerHTML= `
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.precio}$</td>          
        <td><button id=btnBorrar onclick='eliminarProducto(${element.id})'>Eliminar</button></td>`
        tablaCarro.appendChild(nuevosItems)
        
        tablaContainer.appendChild(tituloTabla)
        tituloTabla.innerText= `Tu carrito - Precio total : ${totalCarrito}`
    })
    
    
    tablaContainer.appendChild(comprarTodo);
}




const btnMostrar = document.getElementById("btnMostrarTodo");
let contador = 0;
let contenidoH2 = document.querySelector("#contador");

    const articulo = document.getElementsByTagName("article")
    btnBuscar.addEventListener("click",()=>{
        const datosBuscados = (input.value.length === 0) ? true : false ;
        datosBuscados ? swal({title: 'Error',width:'200',height:'200',text:'Ingrese algun dato para poder buscar',icon:'error',button:':('}) : filtrarCursosNombres(input.value.toLowerCase())
        });
        
        

        comprarTodo.addEventListener('click', () =>{
            localStorage.setItem("Carrito", JSON.stringify(carrito));
            const totalCarrito = carrito.reduce((acc,producto) => acc + producto.precio,0)
            section.innerHTML = ""
            const compraFinalizada = document.createElement('ul')
            compraFinalizada.className = "resumenCompra"
            compraFinalizada.innerHTML = `
            <li>Usted realizo la compra de ${carrito.length} cursos </li>
            <li>Monto a pagar = ${totalCarrito} $</li>
            <li>Cursos = ${(carrito.map((element)=>{return "'" + element.nombre + "' "}))} </li>
            <li>Presione en 'ver todos los cursos' para seguir comprando.</li>
            `
            section.appendChild(compraFinalizada)
            carrito.length = 0;
            
            carritoContenedor.innerHTML=`<h3>Su carrito esta vacio!</h3>`
            console.log(carrito)
        })

        if(carrito.length === 0){
            carritoContenedor.innerHTML=`<h3>Su carrito esta vacio!</h3>`
        }
        
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
                  <img src="./img/ejemplos/imgHumoVentana.jpg" alt="">
                </article>
            </section>
            <section id="seccionesEjemplos">
                <article id="seccionImagen">
                  <img src="./img/ejemplos/menuDeComprasCsgo.jpg" alt="">
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
                  <img src="./img/ejemplos/mapasDePracticaCsgo.jpg" alt="">
                </article>
            </section>
            </div>`
        })
       
    