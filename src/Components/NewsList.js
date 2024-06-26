import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useNewsData from '../Hooks/useNewsData';
const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [news, setNews] = useState([])

  // const { newsData, loading, error } = useNewsData(category, searchTerm);
  useEffect(() => {
    const fetchNews = async () => {
      let url = 'https://newsapi.org/v2/top-headlines?country=us';
      if (category) {
        url += `&category=${category}`;
      }
      if (searchTerm) {
        url += `&q=${searchTerm}`;
      }
      url += `&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      const response = await fetch(url); //{mode: 'no-cors'}
      const data = await response.json();
      console.log(data);
      setNews(data.articles);
    };
    fetchNews();
  },[searchTerm,category]);
  // if (loading) {
  //   return <div>loading....</div>;
  // }
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  return (
    <Container>
      <Row>
        {news?.map((article) => (
          <Col xs={12} md={6} key={article.url}>
            <Card>
              <Card.Img src={article.urlToImage} variant="top" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={article.url}>Read More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default NewsList;
