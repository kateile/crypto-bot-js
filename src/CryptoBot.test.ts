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

        expect(result.app_id).toBeDefined()
        expect(result.name).toBeDefined()
        expect(result.payment_processing_bot_username).toBeDefined()
    });

    it('should send getBalance', async () => {
        const result = await cryptoBot.getBalance()

        expect(result[0].currency_code).toBeDefined()
        expect(result[0].available).toBeDefined()
    });
})
