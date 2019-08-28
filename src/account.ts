/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InvestmentAccount, InvestmentPosition } from './types'

export class Account implements InvestmentAccount {
  positions: InvestmentPosition[]

  constructor(public name: string) {
    this.positions = []
  }

  getCurrentValue(): number {
    return 0
  }

  getCost(): number {
    return this.positions.reduce((cost, position) => cost + position.cost, 0)
  }

  getGain(): number {
    return this.getCurrentValue() - this.getCost()
  }

  get value(): number {
    return 0
  }

  addPosition(position: InvestmentPosition): number {
    return this.positions.push(position)
  }

  getHoldings(): InvestmentPosition[] {
    return this.positions
  }
}
