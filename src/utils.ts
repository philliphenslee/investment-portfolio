/*
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function equityValue(price: number, shares: number): number {
  return shares * price;
}
function avgPrice(cost: number, shares: number): number {
  return cost / shares;
}
function portfolioWeight(totalValue: number, value: number): number {
  return (value / totalValue) * 100;
}
function gainPercentage(cost: number, value: number): number {
  return ((value - cost) / cost) * 100;
}
function gain(cost: number, value: number): number {
  return value - cost;
}
function formatValue(price: number): string {
  return `${parseFloat(price.toString()).toFixed(2)}`;
}
export {
  equityValue,
  avgPrice,
  portfolioWeight,
  gainPercentage,
  gain,
  formatValue,
};
