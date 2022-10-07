import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'HelloPipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value==null) {
      return ("Enter a pokemon name");
    } else { return ("Hello " + value);}
  }

}
