//Lets start by importing our module
const cb = require('../lib') //should be require('crypto-bot')

//Then you should create a new instance of CryptoBot
const cryptoBot = new cb.CryptoBot({
    //or mainnet if you want to go live...
    target: 'testnet',
    //token can be obtained on telegram via t.me/cryptoBot or t.me/CryptoTestnetBot
    //Token should be stored in env variables and not in plain as done here
    token: process.env.TOKEN ?? '3274:AAOBNJIheTfZ3Gwp3lTH4IwxAYXNnA38M5u'
})

//Here you can execute any method you want.
cryptoBot.getMe().then(r => {
    console.log(`My App name is ${r.name}`)
})
