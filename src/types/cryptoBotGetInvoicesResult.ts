import {CryptoBotInvoice} from './cryptoBotInvoice';

/**
 * This describes parameters obtained in result of getMe() response
 */
export type CryptoBotGetInvoicesResult = {
  count: number;
  items: CryptoBotInvoice[];
};
