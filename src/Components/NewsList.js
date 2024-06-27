import { Card, Col, Container, Row } from 'react-bootstrap';
import useNewsData from '../Hooks/useNewsData';

const NewsList = (props) => {
  const { category, searchTerm } = props;

  const { newsData, loading, error } = useNewsData(category, searchTerm);
  if (loading) {
    return <div>loading....</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Row>
        {newsData?.map((article) => (
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
