import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CreditCardValidator } from '../src/components/PaymentCard';

describe('CreditCardValidator', () => {
  beforeEach(() => {
    render(<CreditCardValidator />);
  });

  it('renders all form fields', () => {
    expect(screen.getByLabelText(/Card Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cardholder Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Expiry Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CVV/i)).toBeInTheDocument();
  });

  it('validates a correct Visa card number', () => {
    const cardInput = screen.getByLabelText(/Card Number/i);
    fireEvent.change(cardInput, { target: { value: '4111 1111 1111 1111' } });

    expect(screen.getByText(/Valid Visa number/i)).toBeInTheDocument();
  });

  it('shows invalid message for incorrect card number', () => {
    const cardInput = screen.getByLabelText(/Card Number/i);
    fireEvent.change(cardInput, { target: { value: '1234 5678 9012 3456' } });

    expect(screen.getByText(/Invalid card number/i)).toBeInTheDocument();
  });

  it('allows input for expiry date and formats it', () => {
    const expiryInput = screen.getByLabelText(/Expiry Date/i);
    fireEvent.change(expiryInput, { target: { value: '1225' } });

    expect(expiryInput).toHaveValue('12/25');
  });

  it('limits CVV input to 4 digits max', () => {
    const cvvInput = screen.getByLabelText(/CVV/i);
    fireEvent.change(cvvInput, { target: { value: '12345' } });

    expect(cvvInput).toHaveValue('1234');
  });
});
