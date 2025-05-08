import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CreditCard, Check, X, Calendar, User } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Toaster, toast } from 'sonner';

export const CreditCardValidator = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardType, setCardType] = useState('');
  const [focused, setFocused] = useState('');
  const [loading, setLoading] = useState(false);

  const sendCardValidation = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/payments/validate/card`, { cardNumber });
      const isCardValid = response.data?.cardNumberValid || false;
      const responseMessage = response.data?.title || 'Card validation complete';
      
      // Show toast notification with Sonner
      if (isCardValid) {
        toast.success(responseMessage, {
          duration: 3000,
        });
      } else {
        toast.error(responseMessage, {
          duration: 3000,
        });
      }
      
    } catch (error) {
      console.error("Error validating card:", error);
      toast.error('Failed to validate card. Please try again.', {
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle card number input change
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (input.length <= 16) {
      // Format with spaces every 4 digits
      const formatted = input.replace(/(.{4})/g, '$1 ').trim();
      setCardNumber(formatted);
      identifyCardType(input);
    }
  };
  
  // Identify card type based on first digits
  const identifyCardType = (number: string) => {
    if (!number) {
      setCardType('');
      return;
    }
    
    if (number.startsWith('4')) {
      setCardType('Visa');
    } else if (/^5[1-5]/.test(number)) {
      setCardType('MasterCard');
    } else if (/^3[47]/.test(number)) {
      setCardType('American Express');
    } else if (/^6(?:011|5)/.test(number)) {
      setCardType('Discover');
    } else {
      setCardType('');
    }
  };
  
  // Handle expiry date input
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (input.length <= 4) {
      let formatted = input;
      if (input.length > 2) {
        formatted = input.slice(0, 2) + '/' + input.slice(2);
      }
      setExpiry(formatted);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // remove non-digits
    setCvv(value.slice(0, 4)); // truncate to 4 digits
  };

  return (
    <div className="flex justify-center items-center w-full relative">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="flex items-center mb-6">
          <CreditCard className="mr-2 h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Card Payment</h2>
        </div>
        
        <div className="space-y-4">
          {/* Card Number Input */}
          <div className="space-y-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <div className="relative">
              <input
                id="cardNumber"
                type="text" 
                value={cardNumber}
                onChange={handleCardNumberChange}
                onFocus={() => setFocused('number')}
                onBlur={() => setFocused('')}
                placeholder="1234 5678 9012 3456"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              {cardType && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-sm text-gray-600">{cardType}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Cardholder Name */}
          <div className="space-y-2">
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
              Cardholder Name
            </label>
            <div className="relative">
              <input
                id="cardName"
                type="text"
                value={cardName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardName(e.target.value)}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                placeholder="John Smith"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {/* Expiry Date and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <div className="relative">
                <input
                  id="expiry"
                  type="text"
                  value={expiry}
                  onChange={handleExpiryChange}
                  onFocus={() => setFocused('expiry')}
                  onBlur={() => setFocused('')}
                  placeholder="MM/YY"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                value={cvv}
                onChange={handleCvvChange}
                onFocus={() => setFocused('cvv')}
                onBlur={() => setFocused('')}
                placeholder="123"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button 
            onClick={sendCardValidation}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md mt-4 transition duration-200 disabled:bg-blue-400"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </div>

      {/* Sonner Toaster component */}
      <Toaster position="bottom-right" richColors />
    </div>
  );
}