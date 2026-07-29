import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import "./Hero.css";
import bgImage from "../../../assets/images/hero/heroBanner.png"; // Import your image

function Hero() {

   const containerStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0) 100%),
      url(${bgImage})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    color: "white",
    padding: "2rem"
  };


  return (
    <section className="hero-section">
    <Container fluid style={containerStyle}>
        <Row className="align-items-center">

          <Col lg={6}>

            <span className="hero-badge">
              Weekly Equipment Rentals
            </span>

            <h1 className="hero-title" style={{color: 'white'}}>
              Rent Premium Equipment
            </h1>

            <p className="hero-text">
              Cameras, Trekking Gear, Musical Instruments,
              Drones and Gaming Equipment available
              at affordable weekly rentals.
            </p>

            <InputGroup className="hero-search mb-4">

              <Form.Control
                placeholder="Search equipment..."
              />

              <Button variant="primary">
                Search
              </Button>

            </InputGroup>

            <div className="popular-tags">

              <span>Camera</span>

              <span>Drone</span>

              <span>Camping</span>

              <span>Music</span>

            </div>

          </Col>


        </Row>
      </Container>
    </section>
  );
}

export default Hero;