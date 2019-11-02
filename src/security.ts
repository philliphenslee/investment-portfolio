/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { InvestmentSecurity, Quote } from './types';

/**
 * @class Security
 */
export class Security implements InvestmentSecurity {
  latestPrice: number;

  previousClose: number;

  changeDay: number;

  changeDayPercent: number;

  priceHigh: number;

  priceLow: number;

  constructor(public name: string, public symbol: string) {
    this.changeDay = 0;
    this.changeDayPercent = 0;
    this.latestPrice = 0;
    this.priceHigh = 0;
    this.priceLow = 0;
    this.previousClose = 0;
  }

  updatePrice(price: number) {
    this.latestPrice = price;
  }

  update(quote: Quote): InvestmentSecurity {
    this.changeDay = quote.change;
    this.changeDayPercent = quote.changePercent;
    this.latestPrice = quote.latestPrice;
    this.priceHigh = quote.high;
    this.priceLow = quote.low;
    this.previousClose = quote.previousClose;
    this.name = quote.companyName;
    return this;
  }
}
