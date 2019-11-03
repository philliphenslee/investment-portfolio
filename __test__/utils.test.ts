/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as utils from '../src/utils';
import { Portfolio } from '../src';

describe('Investment Utilities', () => {
  test('Should return an equity value based on current price and total shares', () => {
    expect(utils.equityValue(100.1, 1000)).toEqual(100100);
  });
  test('Returns average cost per share', () => {
    expect(utils.avgPrice(98000, 1000)).toEqual(98);
  });
  test('Returns percent of total portfolio weight', () => {
    expect(utils.portfolioWeight(431000.02, 210320.12)).toEqual(
      48.79816942931928
    );
  });
  test('Returns the gain as a percentage', () => {
    expect(utils.gainPercentage(25000, 30000)).toEqual(20);
  });
  test('Returns the gain amount', () => {
    expect(utils.gain(25000, 30000)).toEqual(5000);
  });
  test('Returns formatted value', () => {
    expect(utils.formatValue(233123.9837986854)).toEqual('233123.98');
  });
});
