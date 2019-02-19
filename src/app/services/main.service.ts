import { Injectable } from '@angular/core';
import { ranges } from '../data/ranges';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  public getRange(val) {
    console.log(val, ranges);
    return ranges.filter(range => range.min <= val && range.max >= val)
  }
}
