import { Col, Row, Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import classes from "../components/Counter.module.css";
import { useSelector } from "react-redux";
const Counter = () => {
const userdata  = useSelector((data) => data)
  console.log(userdata)
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col className="mt-5 text-center">
            <Card>
              <Card.Body>
                <Card.Title>Userdata</Card.Title>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Username</th>
                      <th scope="col">Type</th>
                  
                    </tr>
                  </thead>
                  <tbody>
                
                {
                    userdata.map((res) =>(

                        <tr key={res.id}>
                        <th scope="row">{res.id}</th>
                        <td>{res.username}</td>
                        <td>{res.type}</td>
                        
                    </tr>
                    ))
                    
                }
                    
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
export default Counter;
