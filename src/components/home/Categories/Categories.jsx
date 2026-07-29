import { Container, Row, Col, Card } from "react-bootstrap";
import categories from "../../../data/categories";
import "./Categories.css";

function Categories() {
  return (
    <section className="categories-section">
      <Container>

        <h2 className="section-title text-center">
          Browse by Category
        </h2>

        <p className="section-subtitle text-center">
          Find the equipment you need for your next adventure.
        </p>

        <Row className="g-4 mt-4">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Col md={4} lg={2} key={category.id}>

                <Card className="category-card text-center">

                  <Card.Body>

                    <Icon className="category-icon" />

                    <h5>{category.name}</h5>

                    <p>{category.products}</p>

                  </Card.Body>

                </Card>

              </Col>
            );
          })}

        </Row>

      </Container>
    </section>
  );
}

export default Categories;