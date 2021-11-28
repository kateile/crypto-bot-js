/**
 * This represents the overall response from CryptoBot
 */
import {CryptoBotError} from "./cryptoBotError";


export type CryptoBotResponseData<T> = {
    /**
     * This will be true for success request and false otherwise
     */
    ok: boolean,
    /**
     * This represents the actual data for specific method.
     */
    result?: T
    /**
     * If there is error in your request it will be here
     */
    error?: CryptoBotError
}
