
// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;

let PERSONAJE = {
  nombre: nombre,
  edad: edad
};


interface valida{
    nombre:string;
    artesMarciales:string[];
}

let batman:valida = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}





// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string="arco" ){
  let mensaje;
  if( poder ){
    //  mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
  }else{
     mensaje = nombre + " tiene un " + poder;
  }
  console.log(mensaje);
};

getAvenger("alejandro","fuego");

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
