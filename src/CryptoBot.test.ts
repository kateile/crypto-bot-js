import {CryptoBot} from "./CryptoBot";

describe('CryptoBot', () => {
    let cryptoBot: CryptoBot

    beforeAll(() => {
        cryptoBot = new CryptoBot({
            token: '3274:AAOBNJIheTfZ3Gwp3lTH4IwxAYXNnA38M5u',
            target: "testnet"
        })
    })

    it('should send getMe', async () => {
        const result = await cryptoBot.getMe()

        console.log(result)
        expect(result).toBeDefined()
    });
})
