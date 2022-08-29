/**let numero = parseInt(prompt("Ingrese numero para calcular tabla del 1 al 10"))

for(let i=1; i<=10 ; i++){
    let resultado = numero * i;
    console.log(numero + "*" + i + "=" + resultado )
}
**/
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
