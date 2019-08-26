/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface InvestmentPortfolio {
  accounts: InvestmentAccount[]
  securities: InvestmentSecurity[]
  value: number
  gain: number
}
export interface InvestmentAccount {
  name: string
  value: number
  positions: InvestmentPosition[]
}
export interface InvestmentSecurity {
  name: string
  symbol: string
  latestPrice: number
  previousClose: number
  changeDay: number
  changeDayPercent: number
  priceHigh: number
  priceLow: number
}
export interface InvestmentPosition {
  security: InvestmentSecurity
  shares: number
  cost: number
  value: number
}
export interface InvestmentAccountPosition {
  name: string
  positions: [
    {
      symbol: string
      shares: number
      cost: number
    }
  ]
}
