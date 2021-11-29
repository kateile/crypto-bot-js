import {CryptoBotAsset} from './cryptoBotAsset';

/**
 * This describes parameters obtained in result of createInvoice() response
 */
export type CryptoBotInvoice = {
  invoice_id: number;
  status: string;
  hash: string;
  asset: CryptoBotAsset;
  amount: string;
  pay_url: string;
  created_at: string;
  allow_comments: boolean;
  allow_anonymous: boolean;
  is_confirmed: boolean;
};
