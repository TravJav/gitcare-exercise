import luhn from 'luhn';
import * as dotenv from 'dotenv';
dotenv.config();

/**
 * PaymentValidation class to handle payment processing utilities,
 * including credit card number validation via Luhn algorithm.
 */
export class PaymentValidation {
  /**
   * Validates a credit card number using the Luhn algorithm.
   *
   * @param cardNumber - The credit card number as a string (digits only).
   * @returns True if the card number is valid, otherwise false.
   */
  validateCardNumber(cardNumber: string): boolean {
    if (!cardNumber || typeof cardNumber !== 'string') {
      throw new Error('Card number must be a non-empty string.');
    }
  
    // Should only contain digits
    const sanitized = cardNumber.replace(/\D/g, '');
    
    // credit cards have a max number length
    if (sanitized.length < 13 || sanitized.length > 19) {
      return false;
    }
  
    return luhn.validate(sanitized);
  }
}
