const listado = document.querySelector('#listaTutores')

fetch('../data.json')
    .then((res) => res.json())
    .then((data) =>{

        data.forEach(element => {
            const li = document.createElement('li')
            li.innerHTML=`
            <h4>Nombre : ${element.nombre}</h4>
            <p>Rango : '${element.rango}'</p>
            <a href="${element.direccion}"><button>Ver Perfil</button></a>
            `
            listado.appendChild(li);
        });
    } )