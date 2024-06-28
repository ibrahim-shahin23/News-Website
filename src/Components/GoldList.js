import { Container, Row } from "react-bootstrap";
import useGoldData from "../Hooks/useGoldData.js";

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
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Gold karat</th>
            <th>Price in EGP</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(prices).map(([karat,price]) => (
            <tr key={karat}>
              <td>{karat}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Row>
    </Container>

  );

};

export default GoldList;
