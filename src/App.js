import './App.css';
import data from './data/database.json';
import { Card, Container, Row, Col, Tab, Tabs } from 'react-bootstrap';


function Karty(yearN, monthN) {
  return (
    data.filter((data) => data.year === yearN && data.month === monthN).map((data) => {
      return (
        <Col md={3}>
          <Card id={data.id} style={{ textAlign: 'center', margin: '10px' }}>
            { 
              data.premiere ? 
                <Card.Header class="karty">Kiedy wyjdzie ten produkt</Card.Header>
              : <Card.Header>
                { data.stock ? "Produkt Dostępny" : "Produkt Niedostępny"}
              </Card.Header> 

            }
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
              <Card.Title>{`${data.title}`}</Card.Title>
              
            </Card.Body>
            <Card.Footer className="text-muted">{data.month} {data.year}</Card.Footer>
          </Card>
        </Col>
      )
    })
  )
}

function KartyWszystkie() {
  return (
    data.map((data) => {
      return (

        <Col md={3}>
          <Card id={data.id} style={{ textAlign: 'center', margin: '15px' }}>
            { 
              data.premiere ? 
                <Card.Header class="karty">Kiedy wyjdzie ten produkt</Card.Header>
                : <Card.Header>
                  { data.stock ? "Produkt Dostępny" : "Produkt Niedostępny"}
                </Card.Header> 
              }
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title>{`${data.title}`}</Card.Title>
                  
              </Card.Body>
              <Card.Footer className="text-muted">{data.month} {data.year}</Card.Footer>
          </Card>
        </Col>
      )
    })
  )
}


function App() {
  let nowDate = new Date();
  return (
    <div className="App">
      <Tabs
        defaultActiveKey={nowDate.getMonth()}
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        {["2021", "2022", "Pokaż wszystkie"].map((y, yi) =>
          <Tab eventKey={yi} title={y}>
            <Container class="przyciski">
            { y !== "Pokaż wszystkie" ? (
              <Tabs
                defaultActiveKey={nowDate.getMonth()}
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
              >
                {["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", 
                "Sierpień","Wrzesień", "Październik", "Listopad", "Grudzień"].map((m, mi) =>
                  <Tab eventKey={mi} title={m}>
                  <Container>
                    <Row>
                       {Karty(y, m) }
                    </Row>
                  </Container>
                </Tab>
                )}
              </Tabs> ) : (
                <Container>
                <Row>
                  { KartyWszystkie() }
                </Row>
              </Container>
              )}
            </Container>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}

export default App;



