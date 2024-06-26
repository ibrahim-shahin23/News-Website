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
function App() {
  const[category, setCategory] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const handleCAtegoryClick = (category)=>{
    setCategory(category)
    setSearchTerm("")
  }
  const handleSearch = (event)=>{
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value)
  }
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
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
                  <Dropdown.Item onClick={()=>{handleCAtegoryClick("General")}}>General</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{handleCAtegoryClick("Business")}}>Business</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{handleCAtegoryClick("Technology")}}>Technology</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{handleCAtegoryClick("Sports")}}>Sports</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{handleCAtegoryClick("Entertainment")}}>Entertainment</Dropdown.Item>
                </Dropdown.Menu> 
              </Dropdown>
            </Nav>
            <Form onSubmit={handleSearch}className="d-flex">
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
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h5>Categories</h5>
            <Nav className="flex-column">
              <Nav.Link onClick={()=>{handleCAtegoryClick("General")}}>General</Nav.Link>
              <Nav.Link onClick={()=>{handleCAtegoryClick("Business")}}>Business</Nav.Link>
              <Nav.Link onClick={()=>{handleCAtegoryClick("Technology")}}>Technology</Nav.Link>
              <Nav.Link onClick={()=>{handleCAtegoryClick("Sports")}}>Sports</Nav.Link>
              <Nav.Link onClick={()=>{handleCAtegoryClick("Entertainment")}}>Entertainment</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={9}>
          <NewsList category={category} searchTerm={searchTerm}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
