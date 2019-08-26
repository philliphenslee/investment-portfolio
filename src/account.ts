/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InvestmentAccount, InvestmentPosition } from './types'

export class Account implements InvestmentAccount {
  public positions: InvestmentPosition[]

  constructor(public name: string) {
    this.positions = []
  }

  public getCurrentValue(): number {
    return 0
  }

  public getCost(): number {
    return this.positions.reduce((cost, position) => cost + position.cost, 0)
  }

  public getGain(): number {
    return this.getCurrentValue() - this.getCost()
  }

  public get value(): number {
    return 0
  }

  public addPosition(position: InvestmentPosition): number {
    return this.positions.push(position)
  }

  public getHoldings(): InvestmentPosition[] {
    return this.positions
  }
}
