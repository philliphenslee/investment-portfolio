/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { InvestmentSecurity } from './types'

/**
 * @class Security
 */
export class Security implements InvestmentSecurity {
  latestPrice: number
  previousClose: number
  changeDay: number
  changeDayPercent: number
  priceHigh: number
  priceLow: number

  constructor(public name: string, public symbol: string) {
    this.changeDay = 0
    this.changeDayPercent = 0
    this.latestPrice = 0
    this.priceHigh = 0
    this.priceLow = 0
    this.previousClose = 0
  }

  update(values: []) {
    // TODO Updates values from array or JSON
  }
}
