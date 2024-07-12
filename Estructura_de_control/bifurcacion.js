//Bifurgacion 

//if
if(true){
    console.log("verdadero"); 
}

//if-else
if(false){
    console.log("verdadero");
} else{
    console.log("Espiterman");
}

//Ejemplo usando variables

let edad = 22;
let legal = 18;

if (edad=>legal) {
    console.log("es mayor de edad");
} else if(edad<legal){
    console.log("es menor de edad");
} else {
    //bloque de codigo
    console.log("error:si no es menor o mayor de edad");
}