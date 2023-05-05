import Rating from "@/components/Rating";
import products from "@/products";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

const ProductDetails = () => {
    const router = useRouter();
    const pid = router.query.productId;
    const product = products.find((p) => p._id === pid);
    const [isAvailable, setIsAvailable] = useState(false);

    const checkProductAvailability = () => {
        if (product.countInStock > 0) {
            setIsAvailable(true);
        } else {
            setIsAvailable(false);
        }
    };

    useEffect(() => {
        checkProductAvailability();
    }, [product.countInStock]);

    return (
        <>
            <Head>
                <title>Alex's Shop</title>
                <meta name="description" content="Ecommerce website built with MERN" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Link href="/" className="btn btn-dark my-3">
                Go back to the Homepage
            </Link>
            <Row>
                <Col md={6}>
                    <Image src="" alt={product.name} width={500} height={500} priority />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
                        <ListGroup.Item>Description : {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{isAvailable ? "In Stock" : "Out Of Stock"}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-center">
                                <Button
                                    variant="dark"
                                    type="button"
                                    size="lg"
                                    disabled={!isAvailable}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductDetails;
