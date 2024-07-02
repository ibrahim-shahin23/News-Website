import React from 'react';
import { Container, Row } from 'react-bootstrap';
import GoldList from '../Components/GoldList/GoldList';
import CurrencyList from '../Components/CurrencyList/currencyList';
import './CurrencyFeed.css'
import styled from 'styled-components';
import background from '../background3.jpg';

const Background = styled.div`
  background-image: url('${background}');
  height: 500px;
  opacity: 0.5;
`;

const CurrencyFeed = () => {
  return (
<div class="parent">
  <img
    class="img-bg"
    src={background}
    alt="background"/>
      <Container>
        <Row className="m-3">
          <GoldList />
        </Row>
        <Row className="mb-5">
          <CurrencyList />
        </Row>
      </Container>
</div>
  );
};

export default CurrencyFeed;
