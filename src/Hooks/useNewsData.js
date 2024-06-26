import { useState, useEffect } from 'react';
const useNewsData = (category, searchTerm) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        const categoryParam = category ? `&category=${category}` : '';
        const searchParam = searchTerm ? `&q=${searchTerm}` : '';
        const url = apiUrl+categoryParam + searchParam ;
        const response = await fetch(url);
        const data = await response.json();

        setNewsData(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchNewsData();
  }, [category, searchTerm]);
  return { newsData, loading, error };
};
export default useNewsData;
