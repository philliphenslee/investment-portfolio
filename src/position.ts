/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { InvestmentPosition } from './types'

/**
 * @class Position
 */
export class Position implements InvestmentPosition {
  _value: number

  constructor(public symbol: string, public shares: number, public cost: number) {
    this._value = 0
  }

  get value(): number {
    return this._value
  }

  set value(price) {
    this._value = this.shares * price
  }

  get gain(): number {
    return this._value - this.cost
  }
}
