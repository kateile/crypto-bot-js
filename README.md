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

Import module as

```js
const cb = require('crypto-bot');
```

Then create new instance like

```js
const cryptoBot = new cb.CryptoBot({
  target: 'testnet', //or mainnet
  token: 'YOUR-TOKEN_HERE' //Example 3274:AAOBNJIheTfZ3Gwp3lTH4IwxAYXNnA38M5u
});
```

And then you can call any method you want like

```js
cryptoBot.getMe().then((r) => {
  console.log(`My App name is ${r.name}`);
});
```

## Methods

| Method           | Description                                                      | Request Params                                                | Response Result                                          |
| ---------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------- |
| getMe            | A simple method for testing your app's authentication token      | None                                                          | [CryptoBotApp](#CryptoBotApp)                            |
| getBalance       | Use this method to get balance of your app                       | None                                                          | [CryptoBotBalance](#CryptoBotBalance)                    |
| getCurrencies    | Use this method to get supported currencies                      | None                                                          | Array of [CryptoBotCurrency](#CryptoBotExchangeRate)     |
| getExchangeRates | Use this method to get exchange rates of supported currencies.   | None                                                          | Array of [CryptoBotExchangeRate](#CryptoBotExchangeRate) |
| createInvoice    | Use this method to create a new invoice                          | [CryptoBotInvoiceInput](#CryptoBotInvoiceInput)               |
| getInvoices      | Use this method to get invoices of your app                      | [CryptoBotGetInvoicesInput](#CryptoBotGetInvoicesInput)       |
| confirmPayment   | Use this method to confirm paid invoice of your app.             | [CryptoBotConfirmInvoiceInput](#CryptoBotConfirmInvoiceInput) |
| getPayments      | Use this method to get paid and unconfirmed invoices of your app | [CryptoBotGetPaymentsInput](#CryptoBotGetPaymentsInput)       |

## Request Parameters

#### CryptoBotConfirmInvoiceInput

#### CryptoBotGetInvoicesInput

#### CryptoBotGetPaymentsInput

#### CryptoBotInvoiceInput

## Response Parameters

#### CryptoBotApp

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| app_id                          | string |
| name                            | string |
| payment_processing_bot_username | string |

#### CryptoBotBalance

#### CryptoBotCurrency

#### CryptoBotExchangeRate

#### CryptoBotGetInvoicesResult

#### CryptoBotGetPaymentsResult

#### CryptoBotInvoice

#### CryptoBotPayment
