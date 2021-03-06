/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Account } from './account';
import { Position } from './position';
import { Security } from './security';
import { InvestmentPortfolio } from './types';

/**
 * A Portfolio class
 * @class Portfolio
 */
export class Portfolio implements InvestmentPortfolio {
  private readonly _accounts: Account[];

  private readonly _securities: Security[];

  private _value: number;

  private _cost: number;

  /**
   *
   * @param data
   */
  constructor(data: InvestmentPortfolio) {
    if (data === undefined || data === null) {
      throw new Error('Must provide valid portfolio data');
    }

    this._accounts = [];
    this._securities = [];
    this._value = 0;
    this._initialize(data);
  }

  /**
   * Get accounts
   */
  get accounts(): Account[] {
    return this._accounts;
  }

  /**
   * Add investment account
   * @param account
   */
  addAccount(account: Account): Account {
    this._accounts.push(account);
    return account;
  }

  /**
   * THe portfolio gain
   */
  get gain(): number {
    return this.value - this._cost;
  }

  /**
   * Get portfolio symbols
   */
  getSymbols(): string[] {
    return this.securities.map(security => security.symbol);
  }

  /**
   * Initialize the portfolio
   * @param data
   * @private
   */
  private _initialize(data: InvestmentPortfolio) {
    let a: Account;
    let p: Position;
    const allSymbols: Array<string> = [];

    // Populate accounts and positions
    data.accounts.forEach(account => {
      a = new Account(account.name);
      account.positions.forEach(position => {
        p = new Position(position.symbol, position.shares, position.cost);
        a.addPosition(p);
        allSymbols.push(position.symbol);
      });
      this.addAccount(a);
    });

    // Add the portfolio's securities
    const uniqueSecurities = [...new Set(allSymbols)];
    uniqueSecurities.sort();
    uniqueSecurities.forEach(security => {
      this._securities.push(new Security(security, security));
    });
  }

  /**
   * Calculate the total portfolio cost.
   */
  get cost(): number {
    return this.accounts.reduce((acc, account) => acc + account.totalCost, 0);
  }

  /**
   * Securities
   */
  get securities(): Security[] {
    return this._securities;
  }

  /**
   * Get the total  portfolio value.
   */
  get value(): number {
    return this.accounts.reduce((acc, account) => acc + account.value, 0);
  }

  /**
   * Calculate the total portfolio shares for a position.
   * @param symbol
   */
  totalPositionShares(symbol: string): number {
    let totalShares = 0;
    this.accounts.forEach(account => {
      account.positions.forEach(position => {
        if (position.symbol === symbol) {
          totalShares += position.shares;
        }
      });
    });
    return totalShares;
  }

  /**
   * Calculate the total cost for a portfolio position.
   * @param symbol
   */
  totalPositionCost(symbol: string): number {
    let totalCost = 0;
    this.accounts.forEach(account => {
      account.positions.forEach(position => {
        if (position.symbol === symbol) {
          totalCost += position.cost;
        }
      });
    });
    return totalCost;
  }
}
