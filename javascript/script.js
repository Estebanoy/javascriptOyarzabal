/**let numero = parseInt(prompt("Ingrese numero para calcular tabla del 1 al 10"))

for(let i=1; i<=10 ; i++){
    let resultado = numero * i;
    console.log(numero + "*" + i + "=" + resultado )
}

let cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos deseados"));

function compras(){
    if(cantidadCursos <= 10){
        if(cantidadCursos > 8){
            return cantidadCursos * 10 - 30 + "$ = Es el precio de la compra de los cursos(USTED OBTUVO UN DESCUENTO DE 30 $ Por comprar mas de 8 cursos";
        }
        else if(cantidadCursos > 6){
            return cantidadCursos * 10 - 20 + "$ = Es el precio de la compra de los cursos(USTED OBTUVO UN DESCUENTO DE 20 $ Por comprar mas de 6 cursos";
        }
        else if(cantidadCursos > 4){
            return cantidadCursos * 10 - 15 + "$ = Es el precio de la compra de los cursos(USTED OBTUVO UN DESCUENTO DE 15 $ Por comprar mas de 4 cursos";
        }
        else if(cantidadCursos > 2){
            return cantidadCursos * 10 - 10 + "$ = Es el precio de la compra de los cursos(USTED OBTUVO UN DESCUENTO DE 10 $ Por comprar mas de 2 cursos";
        }
        else if(cantidadCursos == 2){
            return cantidadCursos * 10 + "$ = Es el precio de la compra de los cursos";
        }
        else if(cantidadCursos == 1){
            return cantidadCursos * 10 + "$ = Es el precio de la compra de los cursos";
        }
        else if(cantidadCursos == 0){
            return "Ingrese un numero mayor a 0";
        }
        
    }
    else if(cantidadCursos > 10){
        return "La cantidad maxima de cursos es de 10"
        
    }
    else{
        return "Ingrese un valor numerico para proceder(Minimo 1)"
    }
   
}
console.log(compras()); 


function curso(nombre,tiempo,precio){
        this.nombre = nombre;
        this.tiempo = tiempo;
        this.precio = precio;
    }
    

    
const cursos = [];  
cursos.push(new curso("curso1",3,150));
cursos.push(new curso("curso2",4,200))
cursos.push(new curso("curso3",3,250))
cursos.push(new curso("curso4",2,100))
cursos.push(new curso("curso5",5,350))


const newCursoName = prompt("Ingrese nombre de nuevo curso");
const newCursotime = parseInt(prompt("Ingrese la duracion del nuevo curso(un numero , son semanas)"));
const newCursoPrice = parseInt(prompt("Ingrese el monto deseado para el nuevo curso"));

const curso6 = new curso(newCursoName,newCursotime,newCursoPrice);

cursos.push(curso6);

document.write("Nombre del nuevo curso = " + curso6.nombre + "<br>" + "Duracion del curso(semanas) = " + curso6.tiempo + "<br>" + "Precio del curso =$ " + curso6.precio);

const borrarCurso = prompt("Ingrese el nombre del curso que desea borrar(por ejemplo: 'curso1,curso2,curso3')");

for(const ref of cursos){
    if(ref.nombre === borrarCurso){
        let indice = cursos.indexOf(ref);
        cursos.splice(indice,1)
        console.log("Se a elminado el " + ref.nombre);
    }
}

for(const ref of cursos){
    console.log(ref.nombre);
    console.log(ref.tiempo+" Semanas");
    console.log(ref.precio+" $");
    console.log(cursos.indexOf(ref));
}

console.log("Los precios de los cursos varian desde 15000 a 35000");
console.log("La duracion de los cursos varian desde 50 semanas a 70 semanas")


const precioMinimo = prompt("Filtre los cursos por precio ingresando un numero y le mostrara los cursos de eso precio o menores")

cursos.forEach((element)=>{
})

const minCursos = cursos.filter(element =>{
    return element.precio <= precioMinimo;
})

let total = 0;
let precioTotal = 0;


minCursos.forEach((element)=>{
    precioTotal += element.precio;
    total +=  1; 
    document.write("Nombre del curso =" + " "  + element.nombre + "<br>"  + "Precio del curso =" + " " + element.precio + "<br>" + "Duracion del curso (Semanas) =" + " " + element.duracion + "<br>")
})

let calculoDescuento=0;

if(total===5){
    calculoDescuento=0.40;
} 
else if(total === 4){
    calculoDescuento=0.35;
}
else if(total >= 2){
    calculoDescuento=0.25;
}

document.write("Comprando esos " + total + " cursos se obtiene un descuento de =" + " " +  precioTotal*calculoDescuento)


console.log("cantidad de cursos",total,"precio total de los cursos", precioTotal,"Adquiriendo todos esos cursos se obtiene un descuento del calculo descuento = " + calculoDescuento*100 + "%")

const minPrecios = minCursos.map(element =>{
    return element.precio;
})
**/

const cursos = [
    {id: 1, nombre:"CURSO-1", precio:15000, duracion:50},
    {id: 2, nombre:"CURSO-2", precio:20000, duracion:55},
    {id: 3, nombre:"CURSO-3", precio:25000, duracion:60},
    {id: 4, nombre:"CURSO-4", precio:30000, duracion:65},
    {id: 5, nombre:"CURSO-5", precio:35000, duracion:70},
    {id: 6, nombre:"CURSO-6", precio:40000, duracion:75},
];

const filtrado = prompt("Filtre los cursos mediante la cantidad de semanas, ingresando un numero solo obtendra cursos con esa cantidad de semanas o menos.(Los cursos van desde 50 semanas a 75)");

const cursoNombre = prompt("Ingrese un nombre para crear nuevo curso");
const cursoPrecio = parseInt(prompt("Ingrese el precio de su nuevo curso"));
const cursoDuracion = parseInt(prompt("Ingrese la cantidad de semanas que tendra su nuevo curso"));
const idCurso = cursos.length+1;
const nuevoCurso = {id:idCurso,nombre:cursoNombre,precio:cursoPrecio,duracion:cursoDuracion}
cursos.push(nuevoCurso)
console.log(cursos)

for (const element of cursos) {
    if(element.duracion <= filtrado){
    let nuevosLi = document.createElement('div');
    nuevosLi.innerHTML =
    `
    <h3>${element.nombre}</h3>
    <ul>
        <li>ID : ${element.id}</li>
        <li>PRECIO : ${element.precio}</li>
        <li>DURACION(SEMANAS) : ${element.duracion}</li>
    </ul>
    `;
    document.body.appendChild(nuevosLi);
}
}

let ultimaCreacion = document.createElement('div');
ultimaCreacion.innerHTML = 
`
<h3>ULTIMO CURSO CREADO : ${nuevoCurso.nombre}</h3>
    <ul>
        <li>ID : ${nuevoCurso.id}</li>
        <li>PRECIO : ${nuevoCurso.precio}</li>
        <li>DURACION(SEMANAS) : ${nuevoCurso.duracion}</li>
    </ul>

`;
ultimaCreacion.className = 'ultimoDiv';
document.body.appendChild(ultimaCreacion);