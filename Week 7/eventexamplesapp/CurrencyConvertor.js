import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('INR');
  const [converted, setConverted] = useState(null);

  const conversionRate = 0.0098; // ₹1 = €0.011

  const handleSubmit = (e) => {
    e.preventDefault();

    const amt = parseFloat(amount);
    if (isNaN(amt)) {
      alert('Please enter a valid number');
      return;
    }

    let result;
    if (currency === 'INR') {
      result = amt * conversionRate;
      setConverted(`€${result.toFixed(2)}`);
    } else {
      result = amt / conversionRate;
      setConverted(`₹${result.toFixed(2)}`);
    }
  };

  return (
    <div>
      <h2>💱 Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>

        <label style={{ marginLeft: '20px' }}>
          Currency:
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            style={{ marginLeft: '10px' }}
          >
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </label>

        <button type="submit" style={{ marginLeft: '20px' }}>Convert</button>
      </form>

      {converted && (
        <p style={{ marginTop: '20px' }}>Converted Amount: <strong>{converted}</strong></p>
      )}
    </div>
  );
};

export default CurrencyConvertor;