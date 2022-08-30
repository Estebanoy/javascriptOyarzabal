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
console.log(compras()); **/


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

console.log(cursos);





