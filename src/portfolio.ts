/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InvestmentAccount, InvestmentPortfolio, InvestmentSecurity } from './types'

export class Portfolio implements InvestmentPortfolio {
  private static instance: Portfolio

  private _accounts: InvestmentAccount[]
  cost: number
  securities: InvestmentSecurity[]

  static get(): Portfolio {
    if (!Portfolio.instance) {
      Portfolio.instance = new Portfolio()
    }

    return Portfolio.instance
  }

  constructor() {
    this._accounts = []
  }

  get value(): number {
    return 0 // this.value
  }

  get gain(): number {
    return this.value - this.cost
  }

  get accounts(): InvestmentAccount[] {
    return this._accounts
  }

  addAccount(account: InvestmentAccount): InvestmentAccount {
    this._accounts.push(account)
    return account
  }
}
