import {CryptoBotAsset} from "./cryptoBotAsset";

/**
 * This describes parameters obtained in result of getMe() response
 */
export type CryptoBotGetInvoicesInput = {
    /**
     * Optional.
     * Currency code.
     * Supported assets: BTC, TON, ETH (only testnet), USDT, USDC, BUSD. Default: all assets.
     */
    asset?: CryptoBotAsset,
    /**
     * Optional.
     * Invoice IDs separated by comma.
     */
    invoice_ids?: string,
    /**
     * Optional.
     * Status of invoices.
     * Available statusses: active or paid. Default: all statusses.
     */
    status?: string,
    /**
     * Optional.
     * Offset needed to return a specific subset of  invoices.
     * Default 0.
     */
    offset?: number
    /**
     * Optional.
     * Number of invoices to return.
     * Default 100, max 1000.
     */
    count?: number
}
