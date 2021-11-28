/**
 * This describes parameters obtained in result of getExchangeRates() response
 */
export type CryptoBotExchangeRate = {
    is_valid: boolean,
    source: string,
    target: string,
    rate: string
}
