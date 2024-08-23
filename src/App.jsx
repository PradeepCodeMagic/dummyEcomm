import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'

function App() {
  let [data, setData] = useState([])

  let displayData = () => {
    axios.get("https://dummyjson.com/products?limit=100")
      .then((ress) => {
        setData(ress.data.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    displayData()
  }, [])

  return (
    <>
      {/* <Header /> */}
      <Container>
        <Row xs={2} md={4}  >

          {data.map((v, i) => {
            return (
              <Col className='my-2' >
                <Card >
                  <Card.Img variant="top" src={v.thumbnail} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      {v.category}
                    </Card.Text>
                    <p> {v.price} </p>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}


        </Row>
      </Container>
    </>
  )
}

export default App
