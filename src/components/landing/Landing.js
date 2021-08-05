import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';

const Landing = () => {
  return (
    <Container fluid style={{ height: '100vh' }}>
      <Row xs={1} md={2}>
        <Col style={{ marginTop: 237, marginLeft: 57, width: 600 }} md={6}>
          <h1 style={{ fontSize: '4rem', fontWeight: 700, width: '130%' }}>
            CREATE YOUR OWN <br /> SUPERHERO <br /> TEAM
          </h1>
          <p>
            More than 100 different superheros to choose from. Limitless
            combinations of superpowers!
          </p>
          <Button href='/login' style={{ marginRight: 20 }}>
            Log in
          </Button>
          <Button href='/home'>Home Page</Button>
        </Col>
        <Col
          md={{}}
          style={{ marginTop: 80, marginLeft: 50 }}
          className='position-relative'
        >
          <Image
            src='images/4872553.jpg'
            roundedCircle
            style={{ height: 600, width: 600 }}
          />
          <Image
            src='images/super-hero-woman-edited.svg'
            style={{ height: 450, marginTop: -580, marginLeft: -100 }}
          />
          <Image
            src='images/super-hero-man-edited.svg'
            style={{ height: 450, marginTop: -580, marginLeft: 180 }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
