import React, { useState } from 'react';
import './CurrencyConverter.css'

function CurrencyConverter({ rates }) {
  const [fromCurrency, setFromCurrency] = useState('EGP');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleCurrencyChange = (event, type) => {
    const newCurrency = event.target.value;
    if (type === 'from') {
      setFromCurrency(newCurrency);
    } else {
      setToCurrency(newCurrency);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleConvert = () => {
    if (!rates || !amount) {
      setConvertedAmount(null);
      return; // Handle empty input or missing rates gracefully
    }
    const conversionRate = rates[toCurrency].value / rates[fromCurrency].value;
    setConvertedAmount(amount * conversionRate);
  };

  return (
<div className="converter-container">
      <h4>Currency Converter</h4>
      <div className="input-group">
        <select value={fromCurrency} onChange={(e) => handleCurrencyChange(e, 'from')} className="currency-select">
          {Object.keys(rates).map((currencyCode) => (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </select>
        <input type="number" value={amount} onChange={handleAmountChange} className="amount-input" />
      </div>
      <div className="input-group">
        <select value={toCurrency} onChange={(e) => handleCurrencyChange(e, 'to')} className="currency-select">
          {Object.keys(rates).map((currencyCode) => (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode}
            </option>
          ))}
        </select>
        <button onClick={handleConvert} className="convert-button">
          Convert
        </button>
      </div>
      {convertedAmount !== null && (
        <div className="result-text">
          {amount} {fromCurrency} is equivalent to {convertedAmount.toFixed(2)} {toCurrency}.
        </div>
      )}
    </div>  );
}

export default CurrencyConverter;