import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ModalForm from './ModalForm'

function App() {
  const [show, setShow] = useState(false)

  const handleCreateClick = (e, userData) => {
    console.log('create user logic')
    console.log(userData)
    // make a request to create user
  }

  return (
    <Container>
      <Row>
        <Col xs={1}>
          <Button onClick={() => setShow(true)}>Click</Button>
          <ModalForm show={show} onHide={() => setShow(false)} onCreateClick={handleCreateClick} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
