/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InvestmentAccount,
  InvestmentAccountPosition,
  InvestmentPortfolio,
  InvestmentSecurity,
} from './types'

export class Portfolio implements InvestmentPortfolio {
  private readonly _accounts: InvestmentAccount[]
  cost: number
  securities: InvestmentSecurity[]

  constructor(data: InvestmentAccountPosition[]) {
    this._accounts = []
    this.initialize(data)
  }

  get accounts(): InvestmentAccount[] {
    return this._accounts
  }

  addAccount(account: InvestmentAccount): InvestmentAccount {
    this._accounts.push(account)
    return account
  }

  get gain(): number {
    return this.value - this.cost
  }

  private initialize(data: InvestmentAccountPosition[]) {
    // TODO Initialize the portfolio instance
  }

  get value(): number {
    return 0 // this.value
  }
}
