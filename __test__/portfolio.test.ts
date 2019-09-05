/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Account, InvestmentPortfolio, Portfolio } from '../src'
import * as data from '../portfolio-data.json'

describe('Investment Portfolio Test Suite', () => {
  let portfolioData: InvestmentPortfolio, portfolio: Portfolio

  beforeAll(() => {
    /* Import the portfolio data
    {
      "accounts": [
        { "name": "IRA",
          "positions": [
            {
              "symbol": "GOOG",
              "shares": 100.392,
              "cost": 24535.98
            }]
        }]
    } ... */

    portfolioData = <InvestmentPortfolio>JSON.parse(JSON.stringify(data))
    portfolio = new Portfolio(portfolioData)
  })

  test('That it throws an error if not passed valid argument', () => {
    expect(() => {
      // @ts-ignore
      new Portfolio()
    }).toThrowError('Must provide valid portfolio data')
  })

  test('The Portfolio can be initialized and has accounts', () => {
    expect(portfolio).toBeInstanceOf(Portfolio)
    expect(portfolio.accounts.length).toBeGreaterThan(0)
  })

  test('That portfolio can return an array of valid accounts', () => {
    expect(portfolio.accounts[0]).toBeInstanceOf(Account)
  })

  test('That an account returns a valid total cost', () => {
    const account = portfolio.accounts[0]
    expect(account.totalCost)
      .toBeNumber()
      .toBeGreaterThan(0)
  })

  test('That an individual position returns a valid cost', () => {
    const position = portfolio.accounts[0].positions[0]
    expect(position.cost)
      .toBeNumber()
      .toBeGreaterThan(0)
  })

  test('That an individual position returns a valid value', () => {
    const position = portfolio.accounts[0].positions[0]
    expect(position.value)
      .toBeNumber()
      .toBe(0)
  })
})
