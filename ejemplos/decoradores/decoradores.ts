

function decorador( constructor:Function ){
    console.log("esto lo muestra el decorador");
}


@decorador
class pruebaDecoradores{

    private nombre:string;
    private apellido:string;

    constructor(nombre:string,apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;

    }

}