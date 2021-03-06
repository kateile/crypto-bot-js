import {CryptoBot} from './CryptoBot';
import {CryptoBotInvoiceInput} from '../types';

describe('CryptoBot', () => {
  let cryptoBot: CryptoBot;

  beforeAll(() => {
    cryptoBot = new CryptoBot({
      token: '3274:AAOBNJIheTfZ3Gwp3lTH4IwxAYXNnA38M5u',
      target: 'testnet'
    });
  });

  it('should send getMe', async () => {
    const result = await cryptoBot.getMe();

    expect(result.app_id).toBeDefined();
    expect(result.name).toBeDefined();
    expect(result.payment_processing_bot_username).toBeDefined();
  });

  it('should send getBalance', async () => {
    const result = await cryptoBot.getBalance();

    expect(result[0].currency_code).toBeDefined();
    expect(result[0].available).toBeDefined();
  });

  it('should send getCurrencies', async () => {
    const result = await cryptoBot.getCurrencies();

    expect(result[0].is_blockchain).toBeDefined();
    expect(result[0].is_stablecoin).toBeDefined();
    expect(result[0].is_fiat).toBeDefined();
    expect(result[0].name).toBeDefined();
    expect(result[0].code).toBeDefined();
    expect(result[0].url).toBeDefined();
    expect(result[0].decimals).toBeDefined();
  });

  it('should send getExchangeRates', async () => {
    const result = await cryptoBot.getExchangeRates();

    expect(result[0].is_valid).toBeDefined();
    expect(result[0].source).toBeDefined();
    expect(result[0].target).toBeDefined();
    expect(result[0].rate).toBeDefined();
  });

  it('should send createInvoice', async () => {
    const inv: CryptoBotInvoiceInput = {
      amount: '0.2',
      asset: 'TON'
    };

    const result = await cryptoBot.createInvoice(inv);

    expect(result.invoice_id).toBeDefined();
    expect(result.status).toBeDefined();
    expect(result.hash).toBeDefined();
    expect(result.asset).toBeDefined();
    expect(result.amount).toBeDefined();
    expect(result.pay_url).toBeDefined();
    expect(result.created_at).toBeDefined();
    expect(result.allow_comments).toBeDefined();
    expect(result.allow_anonymous).toBeDefined();
    expect(result.is_confirmed).toBeDefined();
  });

  it('should send getInvoices', async () => {
    const inv: CryptoBotInvoiceInput = {
      amount: '2',
      asset: 'TON'
    };

    await cryptoBot.createInvoice(inv);
    const result = await cryptoBot.getInvoices({
      offset: 0
    });

    expect(result.count).toBeDefined();
    expect(result.items).toBeDefined();

    let item = result.items[0];

    expect(item.invoice_id).toBeDefined();
    expect(item.status).toBeDefined();
    expect(item.hash).toBeDefined();
    expect(item.asset).toBeDefined();
    expect(item.amount).toBeDefined();
    expect(item.pay_url).toBeDefined();
    expect(item.created_at).toBeDefined();
    expect(item.allow_comments).toBeDefined();
    expect(item.allow_anonymous).toBeDefined();
    expect(item.is_confirmed).toBeDefined();
  });

  it('should send confirmPayment', async () => {
    const result = await cryptoBot.confirmPayment({
      invoice_id: 1308 //obtain this manually first.
    });

    expect(result.invoice_id).toBeDefined();
    expect(result.status).toBeDefined();
    expect(result.hash).toBeDefined();
    expect(result.asset).toBeDefined();
    expect(result.amount).toBeDefined();
    expect(result.pay_url).toBeDefined();
    expect(result.created_at).toBeDefined();
    expect(result.paid_at).toBeDefined();
    expect(result.allow_comments).toBeDefined();
    expect(result.allow_anonymous).toBeDefined();
    expect(result.is_confirmed).toBeDefined();
    expect(result.confirmed_at).toBeDefined();
  });

  it('should send getPayments', async () => {
    //You should have at least one unconfirmed payment for this to work
    const result = await cryptoBot.getPayments({
      offset: 0,
      count: 100
    });

    expect(result.count).toBeDefined();

    const payment = result.items[0];

    expect(payment.invoice_id).toBeDefined();
    expect(payment.status).toBeDefined();
    expect(payment.hash).toBeDefined();
    expect(payment.asset).toBeDefined();
    expect(payment.amount).toBeDefined();
    expect(payment.pay_url).toBeDefined();
    expect(payment.created_at).toBeDefined();
    expect(payment.paid_at).toBeDefined();
    expect(payment.allow_comments).toBeDefined();
    expect(payment.allow_anonymous).toBeDefined();
    expect(payment.is_confirmed).toBeDefined();

    //Since it is not confirmed yet.
    expect(payment.confirmed_at).not.toBeDefined();
  });
});
