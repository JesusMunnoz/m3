import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigoLibros'
})
export class CodigoLibrosPipe implements PipeTransform {

  transform(value: number): string {
    let result: string;
    result = 'Ref - 00'+ value;
    return result;
  }

}
