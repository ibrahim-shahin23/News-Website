import { useEffect, useState } from 'react';

const useGoldData = () => {
  const [prices, setprices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoldPrices = async () => {
      try {
        setLoading(true);
        const apikey = 'goldapi-3ox0i2slxxjkcqv-io'; //process.env.GOLD_PRICE_API_KEY;
        console.log(apikey);
        const headers = {
          'x-access-token': apikey,
          'Content-Type': 'application/json',
        };
        const response = await fetch(`https://www.goldapi.io/api/XAU/EGP`, {
          method: 'GET',
          headers: headers,
        });
        const data = await response.json();
        console.log(data);
        const desiredKeys = ["price_gram_18k", "price_gram_21k", "price_gram_24k"];

        const goldPrices = Object.fromEntries(
          Object.entries(data).filter(([key]) => desiredKeys.includes(key))
        );        
        console.log(goldPrices);
        setprices(goldPrices);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchGoldPrices();
  }, []);
  return { prices, loading, error };
};
export default useGoldData;
