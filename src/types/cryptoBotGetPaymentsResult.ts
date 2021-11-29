import {CryptoBotPayment} from "./cryptoBotPayment";

/**
 * This describes parameters obtained in result of getMe() response
 */
export type CryptoBotGetPaymentsResult = {
    count: number,
    items: CryptoBotPayment[],
}

