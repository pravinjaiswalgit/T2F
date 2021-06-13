import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, args: number): unknown {
    console.log("------------------"+ value);
    console.log("+++++++++"+args);
    return value.toUpperCase();
  }

}
