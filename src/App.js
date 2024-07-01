import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  Container,
} from 'react-bootstrap';
import NewsList from './Components/NewsList';
import { useState } from 'react';
import CurrencyList from './Components/CurrencyList/currencyList.js';
import GoldList from './Components/GoldList/GoldList.js';
function App() {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm('');
  };

  const navStyle = {
    backgroundColor: 'rgb(222 226 227)',
  };
  const handleSearch = (event) => {
    event.preventDefault();
    setCategory('');
    setSearchTerm(event.target.search.value);
  };
  return (
    <>
      <Navbar style={navStyle} expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">
            News App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle variant="outline-primary">
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      handleCategoryClick('General');
                    }}
                  >
                    General
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      handleCategoryClick('Business');
                    }}
                  >
                    Business
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      handleCategoryClick('Technology');
                    }}
                  >
                    Technology
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      handleCategoryClick('science');
                    }}
                  >
                    science
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      handleCategoryClick('health');
                    }}
                  >
                    health
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      handleCategoryClick('Sports');
                    }}
                  >
                    Sports
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      handleCategoryClick('Entertainment');
                    }}
                  >
                    Entertainment
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <Form onSubmit={handleSearch} className="d-flex">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container >
        <Row className="m-5">
          <GoldList />
        </Row>
        <Row className="m-4">
          <h3>Currency Rates</h3>
          <CurrencyList />
        </Row>
      </Container>
      <Container>
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
            <NewsList category={category} searchTerm={searchTerm} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
