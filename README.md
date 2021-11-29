# CryptoBotJs

NPM Module for [Crypto Pay API](https://t.me/CryptoBot) published for [contest](https://t.me/CryptoBotEN/27).

## Installing

Using npm:

```bash
$ npm install crypto-bot
```

Using yarn:

```bash
$ yarn add crypto-bot
```

## Usage

### Javascript

```js
//Import module as
const cb = require('crypto-bot');

//Then create new instance like
const cryptoBot = new cb.CryptoBot({
  target: 'testnet', //or mainnet
  token: 'YOUR-TOKEN_HERE' //Example 3274:AAOBNJIheTfZ3Gwp3lTH4IwxAYXNnA38M5u
});

//And then you can call any method you want like
cryptoBot.getMe().then((r) => {
  console.log(`My App name is ${r.name}`);
});
```

### Typescript

```ts
import {CryptoBot, CryptoBotApp} from 'crypto-bot';

//Then you should create a new instance of CryptoBot
const cryptoBot = new CryptoBot({
  target: 'testnet',
  token: 'YOUR-TOKEN_HERE' //Example 3274:AAOBNJIheTfZ3Gwp3lTH4IwxAYXNnA38M5u
});

//Here you can execute any method you want.
cryptoBot.getMe().then((r: CryptoBotApp) => {
  console.log(`My App name is ${r.name}`);
});
```

## Methods

| Method           | Description                                                      | Request Params                                                | Response Result                                          |
| ---------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------- |
| getMe            | A simple method for testing your app's authentication token      | None                                                          | [CryptoBotApp](#CryptoBotApp)                            |
| getBalance       | Use this method to get balance of your app                       | None                                                          | Array of [CryptoBotBalance](#CryptoBotBalance)           |
| getCurrencies    | Use this method to get supported currencies                      | None                                                          | Array of [CryptoBotCurrency](#CryptoBotExchangeRate)     |
| getExchangeRates | Use this method to get exchange rates of supported currencies.   | None                                                          | Array of [CryptoBotExchangeRate](#CryptoBotExchangeRate) |
| createInvoice    | Use this method to create a new invoice                          | [CryptoBotInvoiceInput](#CryptoBotInvoiceInput)               |
| getInvoices      | Use this method to get invoices of your app                      | [CryptoBotGetInvoicesInput](#CryptoBotGetInvoicesInput)       |
| confirmPayment   | Use this method to confirm paid invoice of your app.             | [CryptoBotConfirmPaymentInput](#CryptoBotConfirmPaymentInput) |
| getPayments      | Use this method to get paid and unconfirmed invoices of your app | [CryptoBotGetPaymentsInput](#CryptoBotGetPaymentsInput)       |

## Request Parameters

These are the parameters you send in your request.

#### CryptoBotConfirmPaymentInput

#### CryptoBotGetInvoicesInput

#### CryptoBotGetPaymentsInput

#### CryptoBotInvoiceInput

## Response Parameters

These are the parameters contained in a response of your request.

#### CryptoBotApp

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| app_id                          | string |
| name                            | string |
| payment_processing_bot_username | string |

#### CryptoBotAsset

'BTC' | 'TON' | 'ETH' | 'USDT' | 'USDC' | 'BUSD'

#### CryptoBotBalance

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| currency_code | string |             |
| available     | string |             |

#### CryptoBotCurrency

| Name          | Type    | Description |
| ------------- | ------- | ----------- |
| is_blockchain | boolean |             |
| is_stablecoin | boolean |             |
| is_fiat       | boolean |             |
| name          | string  |             |
| code          | string  |             |
| url           | string  |             |
| decimals      | number  |             |

#### CryptoBotExchangeRate

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| is_valid | boolean |             |
| source   | string  |             |
| target   | string  |             |
| rate     | string  |             |

#### CryptoBotGetInvoicesResult

| Name  | Type                                           | Description |
| ----- | ---------------------------------------------- | ----------- |
| count | number                                         |             |
| items | Array of [CryptoBotInvoice](#CryptoBotInvoice) |             |

#### CryptoBotGetPaymentsResult

| Name  | Type                                           | Description |
| ----- | ---------------------------------------------- | ----------- |
| count | number                                         |             |
| items | Array of [CryptoBotPayment](#CryptoBotPayment) |             |

#### CryptoBotInvoice

| Name            | Type                              | Description |
| --------------- | --------------------------------- | ----------- |
| invoice_id      | number                            |             |
| status          | string                            |             |
| hash            | string                            |             |
| asset           | [CryptoBotAsset](#CryptoBotAsset) |             |
| amount          | string                            |             |
| pay_url         | string                            |             |
| created_at      | string                            |             |
| allow_comments  | boolean                           |             |
| allow_anonymous | boolean                           |             |
| is_confirmed    | boolean                           |             |

#### CryptoBotPayment

| Name            | Type                              | Description                                  |
| --------------- | --------------------------------- | -------------------------------------------- |
| invoice_id      | number                            |                                              |
| status          | string                            |                                              |
| hash            | string                            |                                              |
| asset           | [CryptoBotAsset](#CryptoBotAsset) |                                              |
| amount          | string                            |                                              |
| pay_url         | string                            |                                              |
| created_at      | string                            |                                              |
| paid_at         | string                            |                                              |
| allow_comments  | boolean                           |                                              |
| allow_anonymous | boolean                           |                                              |
| is_confirmed    | boolean                           |                                              |
| confirmed_at    | string or undefined               | Won't be available in array of getPayments() |
