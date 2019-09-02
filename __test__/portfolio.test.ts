/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InvestmentPortfolio, Portfolio } from '../src'
import * as data from '../portfolio-data.json'

describe('Investment Portfolio Test Suite', () => {
  let portfolioData: InvestmentPortfolio, portfolio

  beforeAll(() => {
    // Import the portfolio data
    portfolioData = <InvestmentPortfolio>JSON.parse(JSON.stringify(data))
  })

  test('That it throws an error if not passed valid argument', () => {
    expect(() => {
      // @ts-ignore
      new Portfolio()
    }).toThrowError('Must provide valid portfolio data')
  })

  test('The Portfolio can be initialized and has accounts', () => {
    portfolio = new Portfolio(portfolioData)
    expect(portfolio).toBeInstanceOf(Portfolio)
    expect(portfolio.accounts.length).toBeGreaterThan(0)
  })
})
