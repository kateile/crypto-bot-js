import {CryptoBot, CryptoBotApp} from '../lib'; //from 'crypto-bot'

//Then you should create a new instance of CryptoBot
const cryptoBot = new CryptoBot({
  target: 'testnet',
  token: '3274:AAOBNJIheTfZ3Gwp3lTH4IwxAYXNnA38M5u'
});

//Here you can execute any method you want.
cryptoBot.getMe().then((r: CryptoBotApp) => {
  console.log(`My App name is ${r.name}`);
});
