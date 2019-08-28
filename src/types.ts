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
  symbol: string
  shares: number
  cost: number
  value: number
}

// TODO This works, but it is confusing
export interface Accounts {
  accounts?: (AccountsEntity)[] | null
}
export interface AccountsEntity {
  name: string
  positions?: (PositionsEntity)[] | null
}
export interface PositionsEntity {
  symbol: string
  shares: number
  cost: number
  account?: string | null
}
