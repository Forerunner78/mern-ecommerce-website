import { Card } from "react-bootstrap";
import Rating from "./Rating";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link
                href={{
                    pathname: "/product/[productId]",
                    query: { productId: product._id },
                }}
            >
                <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
                <Link
                    href={{
                        pathname: "/product/[productId]",
                        query: { productId: product._id },
                    }}
                    className="text-decoration-none text-reset"
                >
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>
                <Card.Text as="h3">{`${product.price} €`}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
