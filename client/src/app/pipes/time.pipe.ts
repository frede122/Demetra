import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let values = value.split(':');
    let result = values[0] + ":" + values[1];
    return result;
  }

}
