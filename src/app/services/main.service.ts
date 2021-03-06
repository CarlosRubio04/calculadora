import { Injectable } from '@angular/core';
import { ranges } from '../data/ranges';
import { pricesUsd } from '../data/prices.usd';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  public getRange(val) {
    console.log(val, ranges);
    return ranges.filter(range => range.min <= val && range.max >= val);
  }

  public getPrice(currency, type, product, range) {
    // console.log(type, range);
    const currencySelc = this.getCurrency(currency);
    // console.log(currencySelc);
    const productsSelc = currencySelc.filter(prodType => prodType.id === type)[0].produto;
    // console.log(productsSelc);
    const priceBase =  productsSelc.filter(prod => prod.productId === product)[0].price;
    // console.log(productSelc);
    return priceBase - (priceBase * (0.025 * range));
  }

  getCurrency(val) {
    switch (val) {
      case 'usd':
      return pricesUsd;
      break;
      case 'cop':
      return null;
      break;
      default:
      return pricesUsd;
    }
  }
}
