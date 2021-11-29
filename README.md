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
const cb = require('crypto-bot')
```

Then create new instance like

```js
const cryptoBot = new cb.CryptoBot({
    target: 'testnet',//or mainnet
    token: "YOUR-TOKEN_HERE" //Example 3274:AAOBNJIheTfZ3Gwp3lTH4IwxAYXNnA38M5u
})
```

And then you can call any method you want like
```js
cryptoBot.getMe().then(r => {
    console.log(`My App name is ${r.name}`)
})
```
