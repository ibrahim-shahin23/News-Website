import React, { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Row,
} from 'react-bootstrap';
import NewsList from '../Components/NewsList';
import './NewsFeed.css'
import background from '../background4.jpg'

const NewsFeed = () => {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm('');
  };
  const handleSearchClick = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.search.value);
  };

  return (
    <div>
      <img class="img-bg" src={background} alt="background" />
      <Container className='mt-5'>
        <Row>
          <Col xs={12} md={3}>
            <h5>Categories</h5>
            <Nav className="flex-column">
              <Nav.Link
                onClick={() => {
                  handleCategoryClick('General');
                }}
              >
                General
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  handleCategoryClick('Business');
                }}
              >
                Business
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  handleCategoryClick('Technology');
                }}
              >
                Technology
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  handleCategoryClick('science');
                }}
              >
                science
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  handleCategoryClick('health');
                }}
              >
                health
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  handleCategoryClick('Sports');
                }}
              >
                Sports
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  handleCategoryClick('Entertainment');
                }}
              >
                Entertainment
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={9}>
            <Form onSubmit={handleSearchClick} className="d-flex">
              <FormControl
                type="text"
                placeholder="search"
                className="me-2"
                name="search"
              />
              <Button variant="outline-primary" type="submt">
                search
              </Button>
            </Form>

            <NewsList category={category} searchTerm={searchTerm} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsFeed;
