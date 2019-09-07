/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Account } from './account'
import { Position } from './position'
import { Security } from './security'
import { InvestmentPortfolio } from './types'

export class Portfolio implements InvestmentPortfolio {
  private readonly _accounts: Account[]
  private readonly _securities: Security[]
  private _value: number
  cost: number

  constructor(data: InvestmentPortfolio) {
    if (data === undefined || data === null) {
      throw new Error('Must provide valid portfolio data')
    }

    this._accounts = []
    this._securities = []
    this._value = 0
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

  getSymbols(): string[] {
    return this.securities.map(security => security.symbol)
  }

  private _initialize(data: InvestmentPortfolio) {
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

    // Add the portfolio's securities
    const uniqueSecurities = [...new Set(allSymbols)]
    for (const security of uniqueSecurities) {
      this._securities.push(new Security(security, security))
    }
  }

  get securities(): Security[] {
    return this._securities
  }

  get value(): number {
    return this.accounts.reduce((acc, account) => acc + account.value, 0)
  }
}
