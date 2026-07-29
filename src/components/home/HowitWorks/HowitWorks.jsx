import { Container, Row, Col } from "react-bootstrap";
import {
  FaSearch,
  FaCalendarCheck,
  FaTruck,
  FaUndoAlt,
} from "react-icons/fa";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Browse Equipment",
      text: "Explore cameras, drones, trekking gear, musical instruments and more.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Book Online",
      text: "Choose rental duration and complete your booking securely.",
    },
    {
      icon: <FaTruck />,
      title: "Get Delivery",
      text: "Receive your equipment at your doorstep on your selected date.",
    },
    {
      icon: <FaUndoAlt />,
      title: "Return Easily",
      text: "Return the equipment after your rental period with hassle-free pickup.",
    },
  ];

  return (
    <section className="how-section">
      <Container>

        <div className="section-title">
          <h2>How RenteVerse Works</h2>
          <p>Rent premium equipment in just four simple steps.</p>
        </div>

        <Row className="mt-5">

          {steps.map((step, index) => (
            <Col lg={3} md={6} key={index}>

              <div className="step-card">

                <div className="step-number">
                  {index + 1}
                </div>

                <div className="step-icon">
                  {step.icon}
                </div>

                <h5>{step.title}</h5>

                <p>{step.text}</p>

              </div>

            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
}

export default HowItWorks;