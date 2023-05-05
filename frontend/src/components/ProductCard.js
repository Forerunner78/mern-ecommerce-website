import { Card } from "react-bootstrap";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Card.Body>
                <a href={`/product/${product._id}`} className="text-decoration-none text-reset">
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>
                <Card.Text as="h3">{product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
