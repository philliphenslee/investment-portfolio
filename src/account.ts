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
  private readonly _positions: Position[];

  /**
   *
   * @param name
   */
  constructor(public name: string) {
    this._positions = [];
  }

  get positions(): Position[] {
    return this._positions;
  }

  /**
   * The total account cost
   */
  get totalCost(): number {
    return this._positions.reduce((cost, position) => cost + position.cost, 0);
  }

  /**
   * The account gain
   */
  get gain(): number {
    return this.value - this.totalCost;
  }

  /**
   * The account value
   */
  get value(): number {
    return this._positions.reduce(
      (value, position) => value + position.value,
      0
    );
  }

  /**
   *
   * @param position
   */
  addPosition(position: Position): number {
    return this._positions.push(position);
  }
}
