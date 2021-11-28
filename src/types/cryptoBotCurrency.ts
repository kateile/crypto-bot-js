/**
 * This describes parameters obtained in result of getCurrencies() response
 */
export type CryptoBotCurrency = {
    is_blockchain: boolean,
    is_stablecoin: boolean,
    is_fiat: boolean,
    name: string,
    code: string,
    url: string,
    decimals: number
}
