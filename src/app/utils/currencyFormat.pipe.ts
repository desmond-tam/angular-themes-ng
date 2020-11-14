import { Pipe, PipeTransform, Inject } from '@angular/core';
import { FormatNumber } from  './utilities'


@Pipe({
  name: 'currencyFormat'
})
export class CurrencyPipe implements PipeTransform {
  constructor() {

  }
  transform(value: number): any {
    const Pad = (num, size) => {
      let text = num;
      while (text.length < size) text = " " + text;
      return text
  }
    return Pad(FormatNumber(value,0),10);
  }
}
