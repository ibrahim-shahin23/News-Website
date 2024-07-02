import React from 'react'
import { Container, Row } from 'react-bootstrap'
import GoldList from '../Components/GoldList/GoldList'
import CurrencyList from '../Components/CurrencyList/currencyList'

const CurrencyFeed = () => {
  return (
    <div>
            <Container>
        <Row className="m-3">
          <GoldList />
        </Row>
        <Row className="mb-5">
          <CurrencyList />
        </Row>
      </Container>

    </div>
  )
}

export default CurrencyFeed
