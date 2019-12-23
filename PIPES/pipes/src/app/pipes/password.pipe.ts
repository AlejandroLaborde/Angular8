import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    let codificado:string="";
    
    let cantidadLetras=value.length;
    if(args[0]){
      for(let i=0;i<cantidadLetras;i++){
        codificado+="*";
      }
    }else{
      codificado=value;
    }
    return codificado;
  }

}
