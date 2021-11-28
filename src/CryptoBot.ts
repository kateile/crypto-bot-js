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

    private async request(path: Method, params?: object) {
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

        return response.data
    }

    getMe() {
        return this.request('getMe')
    }
}
