import {
    CryptoBotApp,
    CryptoBotBalance,
    CryptoBotConfirmInvoiceInput,
    CryptoBotCurrency,
    CryptoBotExchangeRate,
    CryptoBotGetInvoicesInput,
    CryptoBotGetInvoicesResult,
    CryptoBotGetPaymentsInput,
    CryptoBotGetPaymentsResult,
    CryptoBotInvoice,
    CryptoBotInvoiceInput,
    CryptoBotMethod,
    CryptoBotOptions,
    CryptoBotPayment,
    CryptoBotResponseData
} from "../types";
import createDebug from 'debug';

const axios = require('axios').default;

const debug = createDebug('crypto-bot')

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

        debug('endpoint: %s', `${endpoint()}/${path}`)
        debug('params: %j', params)

        const response = await instance.post(path, params);

        debug('response status: %s', response.status)
        debug('response data: %j', response.data)

        const data = response.data as CryptoBotResponseData<T>

        if (data.ok) {
            return data.result!
        } else {
            throw new Error(`Request failed with error: ${JSON.stringify(data.error)}`)
        }
    }

    /**
     * A simple method for testing your app's authentication token.
     * Requires no parameters.
     * Returns basic information about the app.
     */
    getMe() {
        return this.request<CryptoBotApp>('getMe')
    }

    /**
     * Use this method to get balance of your app.
     * Returns array of assets.
     */
    getBalance() {
        return this.request<CryptoBotBalance[]>('getBalance')
    }

    /**
     * Use this method to get supported currencies.
     * Returns array of currencies.
     */
    getCurrencies() {
        return this.request<CryptoBotCurrency[]>('getCurrencies')
    }

    /**
     * Use this method to get exchange rates of supported currencies.
     * Returns array of currencies.
     */
    getExchangeRates() {
        return this.request<CryptoBotExchangeRate[]>('getExchangeRates')
    }

    /**
     * Use this method to create a new invoice.
     * Returns object of created invoice.
     * @param input
     */
    createInvoice(input: CryptoBotInvoiceInput) {
        return this.request<CryptoBotInvoice>('createInvoice', input)
    }

    /**
     * Use this method to get invoices of your app. On success, the returns array of invoices.
     * @param input
     */
    getInvoices(input: CryptoBotGetInvoicesInput) {
        return this.request<CryptoBotGetInvoicesResult>('getInvoices', input)
    }

    /**
     * Use this method to confirm paid invoice of your app. On success, the return confirmed invoice.
     * @param input
     */
    confirmPayment(input: CryptoBotConfirmInvoiceInput) {
        return this.request<CryptoBotPayment>('confirmPayment', input)
    }

    /**
     * Use this method to get paid and unconfirmed invoices of your app.
     * On success, the returns array of paid and unconfirmed invoices.
     * @param input
     */
    getPayments(input: CryptoBotGetPaymentsInput) {
        return this.request<CryptoBotGetPaymentsResult>('getPayments', input)
    }
}
