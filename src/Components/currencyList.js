import { Container, Row } from 'react-bootstrap';
import useCurrencyData from '../Hooks/useCurrencyData';

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
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Currency Code</th>
            <th>Exchange Rate with USD</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rates).map(([currencyCode, currencyInfo]) => (
            <tr key={currencyCode}>
              <td>{currencyInfo.code}</td>
              <td>{currencyInfo.value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Row>
    </Container>
  );
};
export default CurrencyList;
