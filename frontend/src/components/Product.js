import { Card } from "react-bootstrap";

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Card.Body>
                <a href={`/product/${product._id}`} className="text-decoration-none text-reset">
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as="h3">{product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
