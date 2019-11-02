/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Account,
  InvestmentPortfolio,
  Portfolio,
  Position,
  Security,
} from '../src';
import * as utils from '../src/utils';
import * as data from '../portfolio-data.json';

describe('Investment Portfolio Test Suite', () => {
  let portfolioData: InvestmentPortfolio;
  let portfolio: Portfolio;

  beforeAll(() => {
    /* Import the portfolio json data
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

    portfolioData = <InvestmentPortfolio>JSON.parse(JSON.stringify(data));
    portfolio = new Portfolio(portfolioData);
  });

  test('That it throws an error if not passed valid argument', () => {
    expect(() => {
      // @ts-ignore
      new Portfolio();
    }).toThrowError('Must provide valid portfolio data');
  });

  test('The Portfolio can be initialized and has accounts', () => {
    expect(portfolio).toBeInstanceOf(Portfolio);
    expect(portfolio.accounts.length).toBeGreaterThan(0);
  });

  test('That portfolio can return an array of accounts', () => {
    expect(portfolio.accounts).toBeArray();
    expect(portfolio.accounts[0]).toBeInstanceOf(Account);
  });

  test('That portfolio can return an array of securities', () => {
    expect(portfolio.securities).toBeArray();
    expect(portfolio.securities[0]).toBeInstanceOf(Security);
  });

  test('That portfolio can return an array of security symbols', () => {
    expect(portfolio.getSymbols()).toBeArray();
  });

  test('That portfolio can return a value', () => {
    expect(portfolio.value).toBeNumber();
  });

  test('That portfolio can return a gain value', () => {
    expect(portfolio.gain).toBeNumber();
  });

  test('That Account can return an array of valid positions', () => {
    expect(portfolio.accounts[0].positions[0]).toBeInstanceOf(Position);
  });

  test('That an account returns a valid total cost', () => {
    const account = portfolio.accounts[0];
    expect(account.totalCost)
      .toBeNumber()
      .toBeGreaterThan(0);
  });

  test('That an account returns a valid value', () => {
    const account = portfolio.accounts[0];
    expect(account.value)
      .toBeNumber()
      .toBeGreaterThanOrEqual(0);
  });

  test('That an account returns a gain value', () => {
    const account = portfolio.accounts[0];
    expect(account.gain).toBeNumber();
  });

  test('That an individual position returns a cost', () => {
    const position = portfolio.accounts[0].positions[0];
    expect(position.cost)
      .toBeNumber()
      .toBeGreaterThan(0);
  });

  test('That an individual position returns a value', () => {
    const position = portfolio.accounts[0].positions[0];
    expect(position.value)
      .toBeNumber()
      .toBe(0);
  });

  test('That an individual position returns a gain value', () => {
    const position = portfolio.accounts[0].positions[0];
    expect(position.gain).toBeNumber();
  });

  test('That an individual position value property can be set', () => {
    const position = portfolio.accounts[0].positions[0];
    position.value = 75.37;
    expect(position.value)
      .toEqual(75.37 * position.shares)
      .toBeNumber();
  });

  test('Return the total number of shares for a given security', () => {
    expect(portfolio.totalShares('YOLO'))
      .toEqual(56)
      .toBeNumber();
  });
});
