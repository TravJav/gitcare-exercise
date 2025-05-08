import request from 'supertest';
import express from 'express';
import paymentRouter from '../routes/payments'; 

import { PaymentValidation } from '../controllers/payments/Payments';


const app = express();
app.use(express.json());
app.use('/payments', paymentRouter);

describe('POST /payments/validate/card', () => {
  
  it('should return cardNumberValid as true for valid card number', async () => {
    const response = await request(app)
      .post('/payments/validate/card')
      .send({ cardNumber: '4111111111111111' });

    expect(response.status).toBe(200);
    expect(response.body.cardNumberValid).toBe(true);
    expect(response.body.message).toBe('Credit card validation result');
    expect(response.body.title).toBe('Credit Card Validation.');
  });

  it('should return error for missing card number', async () => {
    const response = await request(app)
      .post('/payments/validate/card')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.cardNumberValid).toBe(false);
    expect(response.body.message).toBe('Card number is required');
    expect(response.body.title).toBe('Validation Error');
  });

  it('should return error for invalid card number (too short)', async () => {
    const response = await request(app)
      .post('/payments/validate/card')
      .send({ cardNumber: '411111' });

    expect(response.status).toBe(200);
    expect(response.body.cardNumberValid).toBe(false);
    expect(response.body.message).toBe('Credit card validation result');
    expect(response.body.title).toBe('Credit Card Validation.');
  });

  it('should return error for invalid card number with non-numeric characters', async () => {
    const response = await request(app)
      .post('/payments/validate/card')
      .send({ cardNumber: '4111-1111-1111-1111' });

    expect(response.status).toBe(200);
    expect(response.body.cardNumberValid).toBe(true);
    expect(response.body.message).toBe('Credit card validation result');
    expect(response.body.title).toBe('Credit Card Validation.');
  });

  it('should return false for invalid card number (checksum)', async () => {
    const response = await request(app)
      .post('/payments/validate/card')
      .send({ cardNumber: '1234567812345678' });

    expect(response.status).toBe(200);
    expect(response.body.cardNumberValid).toBe(false);
    expect(response.body.message).toBe('Credit card validation result');
    expect(response.body.title).toBe('Credit Card Validation.');
  });

  it('should handle internal errors gracefully', async () => {
    const invalidCardNumber = 'error_trigger_card_number';
  
    // Mock the PaymentValidation.validateCardNumber method to throw an error
    jest.spyOn(PaymentValidation.prototype, 'validateCardNumber').mockImplementationOnce(() => {
      throw new Error('Test internal error');
    });
  
    const response = await request(app)
      .post('/payments/validate/card')
      .send({ cardNumber: invalidCardNumber });
  
    expect(response.status).toBe(400);
    expect(response.body.cardNumberValid).toBe(false);
    expect(response.body.message).toBe('Unable to process request, please try again or contact support for help, thank you.');
    expect(response.body.title).toBe('Credit Card Validation.');
  });
});
