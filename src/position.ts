/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Security } from './security'
import { InvestmentPosition } from './types'

export class Position implements InvestmentPosition {
  private _value: number
  cost: number
  security: Security
  shares: number

  constructor(security: Security, shares: number, cost: number) {}

  public get value(): number {
    return this._value
  }

  public get gain(): number {
    return this._value - this.cost
  }

  private calculateValue(): number {
    // TODO Iterate positions and calculate value
    return (this._value = 0)
  }
}
