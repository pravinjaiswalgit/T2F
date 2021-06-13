import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adhar'
})
export class AdharPipe implements PipeTransform {

  transform(value: string, arg: number): unknown {
    return value;
  }
}
