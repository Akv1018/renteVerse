import { Card, Button, Badge } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <Card className="product-card h-100">

      <div className="product-image-wrapper">

        <Card.Img
          variant="top"
          src={product.image}
          className="product-image"
        />

        <Badge bg="success" className="availability-badge">
          Available
        </Badge>

      </div>

      <Card.Body>

        <small className="text-primary">
          {product.category}
        </small>

        <Card.Title className="mt-2">
          {product.name}
        </Card.Title>

        <div className="rating">

          <FaStar color="#ffc107" />

          <span>{product.rating}</span>

        </div>

        <h4 className="price">
          ₹{product.price}
          <small> / week</small>
        </h4>

        <Button variant="primary" className="w-100 mt-3">
          Rent Now
        </Button>

      </Card.Body>

    </Card>
  );
}

export default ProductCard;