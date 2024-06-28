import { useEffect, useState } from 'react';

const useCurrencyData = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        setLoading(true);
        const apikey = process.env.REACT_APP_CURRENCY_API_KEY;
        console.log(apikey)
        const apiUrl = `https://api.currencyapi.com/v3/latest?apikey=cur_live_qEJLtoafPAiDAKP7HllINdiOYA6ZhrZhYTIjnYb5&currencies=EGP%2CEUR%2CUSD%2CCAD`;
        const response = await fetch(apiUrl);
        const currencydata = await response.json();
        setRates(currencydata.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchExchangeRates();
  }, []);
  return { rates, loading, error };
};
export default useCurrencyData;
