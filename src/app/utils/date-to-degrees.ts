import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({name: 'DateToDegreesPipe'})
export class DateToDegreesPipe implements PipeTransform {
  constructor(){}
  transform(date) {

    let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let monthInDegrees = 365 / 12;
    let degrees = (date.getMonth() * monthInDegrees + (date.getDate() / daysInMonth * monthInDegrees));
    return degrees;
  }
}
