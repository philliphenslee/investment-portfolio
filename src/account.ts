/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InvestmentAccount } from './types'
import { Position } from './position'

export class Account implements InvestmentAccount {
  positions: Position[]

  constructor(public name: string) {
    this.positions = []
  }

  get currentValue(): number {
    return 0
  }

  get totalCost(): number {
    return this.positions.reduce((cost, position) => cost + position.cost, 0)
  }

  get gain(): number {
    return this.currentValue - this.totalCost
  }

  get value(): number {
    return 0
  }

  addPosition(position: Position): number {
    return this.positions.push(position)
  }

  getPositions(): Position[] {
    return this.positions
  }
}
