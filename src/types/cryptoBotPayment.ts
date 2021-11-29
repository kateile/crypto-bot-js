import {CryptoBotAsset} from './cryptoBotAsset';

/**
 * This describes parameters obtained in result of createInvoice() response
 */
export type CryptoBotPayment = {
  invoice_id: number;
  status: string;
  hash: string;
  asset: CryptoBotAsset;
  amount: string;
  pay_url: string;
  created_at: string;
  paid_at: string;
  allow_comments: boolean;
  allow_anonymous: boolean;
  is_confirmed: boolean;
  confirmed_at?: string; //Won't be available in array of getPayments()
};
