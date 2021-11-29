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

| Method           | Description                                                      | Request Params                                                | Response Result                                           |
| ---------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------- |
| getMe            | A simple method for testing your app's authentication token      | None                                                          | [CryptoBotApp](#CryptoBotApp)                             |
| getBalance       | Use this method to get balance of your app                       | None                                                          | Array of [CryptoBotBalance](#CryptoBotBalance)            |
| getCurrencies    | Use this method to get supported currencies                      | None                                                          | Array of [CryptoBotCurrency](#CryptoBotExchangeRate)      |
| getExchangeRates | Use this method to get exchange rates of supported currencies.   | None                                                          | Array of [CryptoBotExchangeRate](#CryptoBotExchangeRate)  |
| createInvoice    | Use this method to create a new invoice                          | [CryptoBotInvoiceInput](#CryptoBotInvoiceInput)               | [CryptoBotInvoice](#CryptoBotInvoice)                     |
| getInvoices      | Use this method to get invoices of your app                      | [CryptoBotGetInvoicesInput](#CryptoBotGetInvoicesInput)       | [CryptoBotGetInvoicesResult](#CryptoBotGetInvoicesResult) |
| confirmPayment   | Use this method to confirm paid invoice of your app.             | [CryptoBotConfirmPaymentInput](#CryptoBotConfirmPaymentInput) | [CryptoBotPayment](#CryptoBotPayment)                     |
| getPayments      | Use this method to get paid and unconfirmed invoices of your app | [CryptoBotGetPaymentsInput](#CryptoBotGetPaymentsInput)       | [CryptoBotGetPaymentsResult](#CryptoBotGetPaymentsResult) |

## Request Parameters

These are the parameters you send in your request.

#### CryptoBotConfirmPaymentInput

| Name       | Type   | Optional | Default | Description |
| ---------- | ------ | -------- | ------- | ----------- |
| invoice_id | number | No       | None    |             |

#### CryptoBotGetInvoicesInput

| Name        | Type                              | Optional | Default | Description                                                                    |
| ----------- | --------------------------------- | -------- | ------- | ------------------------------------------------------------------------------ |
| asset       | [CryptoBotAsset](#CryptoBotAsset) | Yes      | None    | Currency code.                                                                 |
| invoice_ids | string                            | Yes      | None    | Invoice IDs separated by comma.                                                |
| status      | string                            | Yes      | None    | Status of invoices. Available statusses active or paid. Default all statusses. |
| offset      | number                            | Yes      | 0       | Offset needed to return a specific subset of invoices.                         |
| count       | number                            | Yes      | 100     | Number of invoices to return. Default 100, max 1000.                           |

#### CryptoBotGetPaymentsInput

| Name   | Type   | Optional | Default | Description                                            |
| ------ | ------ | -------- | ------- | ------------------------------------------------------ |
| offset | number | Yes      | 0       | Offset needed to return a specific subset of invoices. |
| count  | number | Yes      | 100     | Number of invoices to return.                          |

#### CryptoBotInvoiceInput

| Name            | Type                                                    | Optional | Default  | Description                                                                                                                                                 |
| --------------- | ------------------------------------------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| asset           | CryptoBotAsset                                          | No       | None     | Currency code.                                                                                                                                              |
| amount          | string                                                  | No       | None     | Amount of the invoice in float. For example 125.50                                                                                                          |
| description     | string                                                  | Yes      | None     | Description of the invoice. Up to 1024 symbols                                                                                                              |
| paid_btn_name   | 'viewItem ' or 'openChannel' or 'openBot' or 'callback' | Yes      | callback | This button will be shown when your invoice was paid                                                                                                        |
| paid_btn_url    | string                                                  | Yes      | None     | This is required when you use paid_btn_name. Paid button URL.You can set any payment success link (for example link on your bot). Start with https or http. |
| payload         | string                                                  | Yes      | None     | Some data. User ID, payment id, or any data you want to attach to the invoice.                                                                              |
| allow_comments  | boolean                                                 | Yes      | true     | Allow adding comments when paying an invoice.                                                                                                               |
| allow_anonymous | boolean                                                 | Yes      | true     | Allow pay invoice as anonymous                                                                                                                              |

## Response Parameters

These are the parameters contained in a response of your request.

#### CryptoBotApp

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| app_id                          | string |             |
| name                            | string |             |
| payment_processing_bot_username | string |             |

#### CryptoBotAsset

Supported assets are

> BTC, TON, ETH (only testnet), USDT, USDC, BUSD.

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
