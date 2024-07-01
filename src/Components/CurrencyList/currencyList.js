import { Col, Container, Row } from 'react-bootstrap';
import useCurrencyData from '../../Hooks/useCurrencyData';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import './currencyList.css';

const CurrencyList = () => {
  const { rates, loading, error } = useCurrencyData();

  if (loading) {
    return <div>loading....</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Container>
      <Row>
        <Col>
          <table className="rates-table">
            <thead >
              <tr className="rates-table-header">
                <th>Currency Code</th>
                <th>Exchange Rate with USD</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(rates).map(([currencyCode, currencyInfo]) => (
                <tr key={currencyCode} className="rates-table-row">
                  <td className="rates-table-cell">{currencyInfo.code}</td>
                  <td className="rates-table-cell">{currencyInfo.value.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col>
          <CurrencyConverter rates={rates} />
        </Col>
      </Row>
    </Container>
  );
};
export default CurrencyList;
