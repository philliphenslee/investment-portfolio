/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Accounts, InvestmentPortfolio } from './types'
import { Account } from './account'
import { Position } from './position'
import { Security } from './security'

export class Portfolio implements InvestmentPortfolio {
  _accounts: Account[]
  cost: number
  _securities: Security[]

  constructor(data: Accounts) {
    if (data === undefined || data === null) {
      throw Error('Must provide a valid array of portfolio positions')
    }

    this._accounts = []
    this._securities = []
    this._initialize(data)
  }

  get accounts(): Account[] {
    return this._accounts
  }

  addAccount(account: Account): Account {
    this._accounts.push(account)
    return account
  }

  get gain(): number {
    return this.value - this.cost
  }

  _initialize(data: Accounts) {
    let a: Account, p: Position
    const allSymbols: Array<string> = []

    // Populate accounts and positions
    data.accounts.forEach(account => {
      a = new Account(account.name)
      account.positions.forEach(position => {
        p = new Position(position.symbol, position.shares, position.cost)
        a.addPosition(p)
        allSymbols.push(position.symbol)
      })
      this.addAccount(a)
    })

    // Add the portfolios securities
    const uniqueSecurities = [...new Set(allSymbols)]
    for (const security of uniqueSecurities) {
      this._securities.push(new Security(security, security))
    }
  }

  get securities(): Security[] {
    return this._securities
  }

  get value(): number {
    return 0 // this.value
  }
}
