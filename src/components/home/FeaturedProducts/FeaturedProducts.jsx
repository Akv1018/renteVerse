import { Container, Row, Col } from "react-bootstrap";
import products from "../../../data/products";
import ProductCard from "../../product/ProductCard/ProductCard";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  return (
    <section className="featured-products">

      <Container>

        <h2 className="section-title text-center">
          Featured Products
        </h2>

        <p className="section-subtitle text-center">
          Discover our most popular rental equipment.
        </p>

        <Row className="mt-5">

          {products.map((product) => (

            <Col
              key={product.id}
              lg={4}
              md={6}
              className="mb-4"
            >

              <ProductCard product={product} />

            </Col>

          ))}

        </Row>

      </Container>

    </section>
  );
}

export default FeaturedProducts;