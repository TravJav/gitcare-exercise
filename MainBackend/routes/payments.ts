import express, { Request, Response, Router } from 'express';
import { PaymentValidation } from '../controllers/payments/Payments';

const router: Router = express.Router();

interface ValidateCardRequestBody {
  cardNumber: string;
}

router.post('/validate/card', (req: Request<{}, {}, ValidateCardRequestBody>, res: Response) => {
  try {
    const cardNumber = req.body.cardNumber;

    if (!cardNumber) {
      return res.status(400).send({
        message: 'Card number is required',
        title: 'Validation Error',
        cardNumberValid: false
      });
    }

    const paymentValidation = new PaymentValidation();
    const cardNumberValid = paymentValidation.validateCardNumber(cardNumber);

    return res.status(200).send({
      message: 'Credit card validation result',
      title: 'Credit Card Validation.',
      cardNumberValid: cardNumberValid
    });

  } catch (error: any) {
    console.log(`Error while processing credit card number validation: ${error}`);
    return res.status(400).send({
      message: 'Unable to process request, please try again or contact support for help, thank you.',
      title: 'Credit Card Validation.',
      cardNumberValid: false
    });
  }
});

export default router;
