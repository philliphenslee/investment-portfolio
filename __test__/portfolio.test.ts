/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Portfolio } from '../src'
import * as data from '../portfolio-data.json'

describe('Investment Portfolio Test Suite', () => {
  test('The Portfolio should be an instance of portfolio', () => {
    const accounts = JSON.parse(JSON.stringify(data))
    const portfolio = new Portfolio(accounts) /* ?+ */
    expect(portfolio).toBeInstanceOf(Portfolio)
  })

  test('Should throw an error if not passed valid data', () => {
    expect(() => {
      // @ts-ignore
      new Portfolio()
    }).toThrowError('Must provide a valid array of portfolio data')
  })
})
