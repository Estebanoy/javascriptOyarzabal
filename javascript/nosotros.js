const listado = document.querySelector('#listaTutores')

fetch('../data.json')
    .then((res) => res.json())
    .then((data) =>{

        data.forEach(element => {
            const li = document.createElement('li')
            li.innerHTML=`
            <h4>Nombre : ${element.nombre}</h4>
            <p>Rango : '${element.rango}'</p>
            <a href="${element.direccion}"><button>Ver Perfil de Steam</button></a>
            `
            listado.appendChild(li);
        });
    } )

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