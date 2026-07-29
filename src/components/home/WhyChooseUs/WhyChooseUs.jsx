import { Container, Row, Col } from "react-bootstrap";
import {
  FaShieldAlt,
  FaMoneyBillWave,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Verified Products",
      text: "Every product is quality checked before rental.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Affordable Pricing",
      text: "Pay only for the days or weeks you need.",
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      text: "Quick doorstep delivery across your city.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      text: "Friendly customer support whenever you need help.",
    },
  ];

  return (
    <section className="why-section">
      <Container>

        <div className="section-heading">
          <h2>Why Choose RenteVerse?</h2>
          <p>
            Experience hassle-free rentals with trusted equipment and excellent
            customer service.
          </p>
        </div>

        <Row className="g-4 mt-4">

          {features.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="feature-card">

                <div className="feature-icon">
                  {item.icon}
                </div>

                <h5>{item.title}</h5>

                <p>{item.text}</p>

              </div>
            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
}

export default WhyChooseUs;