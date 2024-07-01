import { Container, Row } from 'react-bootstrap';
import useGoldData from '../../Hooks/useGoldData.js';
import './GoldList.css'

const GoldList = () => {
  const { prices, loading, error } = useGoldData();
  if (loading) {
    return <div>loading....</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Row>
        <div className='gold-section'>
        <h1>Gold Prices</h1>
        <table className="table table-striped">
          <thead >
            <tr>
              <th>Gold karat</th>
              <th>Price in EGP</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(prices).map(([karat, price]) => (
              <tr key={karat}>
                <td>{karat}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
      </Row>
    </Container>
  );
};

export default GoldList;
