import {
    CryptoBotApp,
    CryptoBotBalance,
    CryptoBotConfirmInvoiceInput,
    CryptoBotCurrency,
    CryptoBotExchangeRate,
    CryptoBotInvoiceInput,
    CryptoBotInvoiceResult,
    CryptoBotMethod,
    CryptoBotOptions,
    CryptoBotResponseData
} from "../types";

const axios = require('axios').default;


export class CryptoBot {
    constructor(private options: CryptoBotOptions) {

    }

    private async request<T>(path: CryptoBotMethod, params?: object) {
        // At the end we need something like https://pay.crypt.bot/app23:AAN6L32wEhWLR5eaMMJJVXbRVu4HLgKW3L0/getMe
        const endpoint = () => {
            const root = this.options.target === "mainnet" ? 'https://pay.crypt.bot' : 'https://testnet-pay.crypt.bot'

            return `${root}/app${this.options.token}/`
        }

        //type AxiosInstance
        const instance = axios.create({
            baseURL: endpoint(),
            timeout: this.options.timeout ?? 60 * 1000,// default is 1 minute (60 milliseconds)
        });

        const response = await instance.post(path, params);

        console.log('response data: ', response.data) //todo use debug

        const data = response.data as CryptoBotResponseData<T>

        if (data.ok) {
            return data.result!
        } else {
            throw new Error(`Request failed with error: ${data.error}`)
        }
    }

    getMe() {
        return this.request<CryptoBotApp>('getMe')
    }

    /**
     * This returns array of balances your app has accumulated.
     */
    getBalance() {
        return this.request<CryptoBotBalance[]>('getBalance')
    }

    getCurrencies() {
        return this.request<CryptoBotCurrency[]>('getCurrencies')
    }

    getExchangeRates() {
        return this.request<CryptoBotExchangeRate[]>('getExchangeRates')
    }

    createInvoice(input: CryptoBotInvoiceInput) {
        return this.request<CryptoBotInvoiceResult>('createInvoice', input)
    }

    /**
     * Use this method to confirm paid invoice of your app. On success, the return confirmed invoice.
     * @param input
     */
    confirmPayment(input: CryptoBotConfirmInvoiceInput) {
        return this.request<CryptoBotInvoiceResult>('confirmPayment', input)
    }
}
