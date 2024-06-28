import { Card, Col, Container, Row } from 'react-bootstrap';
import useNewsData from '../Hooks/useNewsData';
import CustomPagination from './CustomPagination';
import { useState } from 'react';

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const onPageChange = (pageNumber)=> setCurrentPage(pageNumber)

  const { newsData, loading, error } = useNewsData(category, searchTerm);
  if (loading) {
    return <div>loading....</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <Container>
      <Row>
        {currentArticles?.map((article) => (
          <Col xs={12} md={6} key={article.url}>
            <Card className='mt-5'>
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
      <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
    </Container>
  );
};
export default NewsList;
