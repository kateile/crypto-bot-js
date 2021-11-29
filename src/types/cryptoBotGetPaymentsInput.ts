/**
 * This describes parameters obtained in result of getPayments() response
 */
export type CryptoBotGetPaymentsInput = {
  /**
   * Optional.
   * Offset needed to return a specific subset of  invoices.
   * Default 0.
   */
  offset?: number;
  /**
   * Optional.
   * Number of invoices to return.
   * Default 100, max 1000.
   */
  count?: number;
};
