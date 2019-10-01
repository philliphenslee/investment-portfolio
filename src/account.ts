/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InvestmentAccount } from './types';
import { Position } from './position';

/**
 * @class Account
 */
export class Account implements InvestmentAccount {
  positions: Position[];

  constructor(public name: string) {}

  get totalCost(): number {
    return this.positions.reduce((cost, position) => cost + position.cost, 0);
  }

  get gain(): number {
    return this.value - this.totalCost;
  }

  get value(): number {
    return this.positions.reduce((value, position) => value + position.value, 0);
  }

  addPosition(position: Position): number {
    return this.positions.push(position);
  }
}
