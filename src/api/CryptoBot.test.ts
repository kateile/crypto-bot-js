import {CryptoBot} from "./CryptoBot";
import {CryptoBotInvoice} from "../types/cryptoBotInvoice";

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

    it('should send getCurrencies', async () => {
        const result = await cryptoBot.getCurrencies()

        expect(result[0].is_blockchain).toBeDefined()
        expect(result[0].is_stablecoin).toBeDefined()
        expect(result[0].is_fiat).toBeDefined()
        expect(result[0].name).toBeDefined()
        expect(result[0].code).toBeDefined()
        expect(result[0].url).toBeDefined()
        expect(result[0].decimals).toBeDefined()
    });

    it('should send getExchangeRates', async () => {
        const result = await cryptoBot.getExchangeRates()

        expect(result[0].is_valid).toBeDefined()
        expect(result[0].source).toBeDefined()
        expect(result[0].target).toBeDefined()
        expect(result[0].rate).toBeDefined()
    });

    it('should send createInvoice', async () => {
        const inv: CryptoBotInvoice = {
            amount: "0.1",
            asset: "BTC"
        }

        const result = await cryptoBot.createInvoice(inv)

        expect(result.invoice_id).toBeDefined()
        expect(result.status).toBeDefined()
        expect(result.hash).toBeDefined()
        expect(result.asset).toBeDefined()
        expect(result.amount).toBeDefined()
        expect(result.pay_url).toBeDefined()
        expect(result.created_at).toBeDefined()
        expect(result.allow_comments).toBeDefined()
        expect(result.allow_anonymous).toBeDefined()
        expect(result.is_confirmed).toBeDefined()
    });
})
