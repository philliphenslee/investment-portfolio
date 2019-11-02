/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface InvestmentPortfolio {
  accounts: InvestmentAccount[];
  securities?: InvestmentSecurity[];
  value?: number;
  gain?: number;
}

export interface InvestmentAccount {
  name: string;
  positions: InvestmentPosition[];
  value?: number;
  gain?: number;
}

export interface InvestmentPosition {
  symbol: string;
  shares: number;
  cost: number;
  value: number;
}
export interface InvestmentSecurity {
  name: string;
  symbol: string;
  latestPrice: number;
  previousClose: number;
  changeDay: number;
  changeDayPercent: number;
  priceHigh: number;
  priceLow: number;
}
export interface Quote {
  symbol: string;
  companyName: string;
  calculationPrice: string;
  open: number;
  openTime: number;
  close: number;
  closeTime: number;
  high: number;
  low: number;
  latestPrice: number;
  latestSource: string;
  latestTime: string;
  latestUpdate: number;
  latestVolume: number;
  volume: number;
  iexRealtimePrice: number;
  iexRealtimeSize: number;
  iexLastUpdated: number;
  delayedPrice: number;
  delayedPriceTime: number;
  extendedPrice: number;
  extendedChange: number;
  extendedChangePercent: number;
  extendedPriceTime: number;
  previousClose: number;
  previousVolume: number;
  change: number;
  changePercent: number;
  iexMarketPercent: number;
  iexVolume: number;
  avgTotalVolume: number;
  iexBidPrice: number;
  iexBidSize: number;
  iexAskPrice: number;
  iexAskSize: number;
  marketCap: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
  peRatio: number;
  lastTradeTime: number;
  isUSMarketOpen: boolean;
}
