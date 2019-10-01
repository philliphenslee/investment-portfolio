/**
 * Copyright (c) Phillip Henslee. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IEXCloudClient } from 'node-iex-cloud';
import fetch from 'node-fetch';
import { fromPromise } from 'rxjs/internal-compatibility';
import { delay, mergeMap, repeat, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import axios from 'axios';
import { Portfolio } from './dist';

const getPortfolioData = async () => {
  return axios
    .get(
      'https://script.google.com/a/ph2.us/macros/s/AKfycbwMfUqO46uBD_F_8NUfDgYRhFXbxTFokWp5GghJag/exec?token=K1MjRygIqCFtFXiW9vbu&action=positions'
    )
    .then(async response => response.data);
};

// Get the portfolio data from Google Sheets
// Create the portfolio instance
// Get an array of all the symbols in the portfolio
getPortfolioData().then(data => {
  const portfolio = new Portfolio(data);
  const symbols = portfolio.getSymbols();

  // Create instance of IEX Cloud client
  const iex = new IEXCloudClient(fetch, {
    sandbox: false,
    publishable: 'pk_be300f02c7614f6aa6d7ee445483f6e5',
    version: 'stable',
  });

  // Return an observable from call to IEX
  const getPrices = () =>
    fromPromise(
      iex
        .symbols(...symbols)
        .price()
        .then(response => response)
    );

  // Called each time the observable receives data
  const updatePrices = response => {
    portfolio.securities.forEach(security => {
      security.latestPrice = response[security.symbol].price;
    });
    portfolio.accounts.forEach(account => {
      account.positions.forEach(position => {
        position.value = response[position.symbol].price;
      });
    });
  };

  /* const displayValue = () => {
    console.log(portfolio.value)
    console.log(portfolio.accounts[0].value)
  } */

  // create an observable to poll iex for data
  const poll = of({}).pipe(
    mergeMap(_ => getPrices()),
    tap(updatePrices),
    delay(30000),
    repeat()
  );
  // subscribe to the data
  poll.subscribe();
});
