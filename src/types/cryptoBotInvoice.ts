import {CryptoBotAsset} from "./cryptoBotAsset";

/**
 * This describes parameters obtained in result of getMe() response
 */
export type CryptoBotInvoice = {
    /**
     * Currency code. Supported assets: BTC, TON, ETH (only testnet), USDT, USDC, BUSD.
     */
    asset: CryptoBotAsset,
    /**
     * Amount of the invoice in float. For example: 125.50
     */
    amount: string,
    /**
     * Description of the invoice. Up to 1024 symbols
     */
    description?: string,
    /**
     * default - callback. Paid button name.
     * This button will be shown when your invoice was paid
     */
    paid_btn_name?: 'viewItem ' | 'openChannel' | 'openBot' | 'callback',
    /**
     * Optional but required when you use paid_btn_name.
     * Paid button URL.
     * You can set any payment success link (for example link on your bot). Start with https or http.
     */
    paid_btn_url?: string
    /**
     * Optional.
     * Some data. User ID, payment id, or any data you want to attach to the invoice.
     */
    payload?: string
    /**
     * Optional.
     * Allow adding comments when paying an invoice. Default is true.
     */
    allow_comments?: boolean
    /**
     * Optional.
     * Allow pay invoice as anonymous. Default is true.
     */
    allow_anonymous?: boolean
}
