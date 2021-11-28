import {CryptoBotResponseData} from "./types/cryptoBotData";
import {CryptoBotApp} from "./types/cryptoBotApp";
import {CryptoBotBalance} from "./types/cryptoBotBalance";
import {CryptoBotCurrency} from "./types/cryptoBotCurrency";

const axios = require('axios').default;

/**
 * Params used for initiating client
 */
export type CryptoBotOptions = {
    target: 'testnet' | 'mainnet',
    token: string,
    timeout?: number
}

/**
 * Methods supported by CryptoBot
 */
type Method = 'getMe' |
    'createInvoice' |
    'getInvoices' |
    'getPayments' |
    'confirmPayment' |
    'getBalance' |
    'getExchangeRates' |
    'getCurrencies'

export class CryptoBot {
    constructor(private options: CryptoBotOptions) {

    }

    private async request<T>(path: Method, params?: object) {
        // At the end we need something like https://pay.crypt.bot/app23:AAN6L32wEhWLR5eaMMJJVXbRVu4HLgKW3L0/getMe
        const endpoint = () => {
            const root = this.options.target === "mainnet" ? 'https://pay.crypt.bot' : 'https://testnet-pay.crypt.bot'

            return `${root}/app${this.options.token}/`
        }

        //type AxiosInstance
        const instance = axios.create({
            baseURL: endpoint(),
            timeout: this.options.timeout ?? 0,// default is `0` (no timeout)
        });

        const response = await instance.post(path, params);
        console.log('response data: ',response.data) //todo use debug
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
}
