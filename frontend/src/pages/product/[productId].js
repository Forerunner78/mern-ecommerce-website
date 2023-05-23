import { listProductDetails } from "@/GlobalRedux/actions/productActions";
import Loader from "@/components/Loader";
import Message from "@/components/Message";
import Rating from "@/components/Rating";
import products from "@/products";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Card, CardImg, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
    const router = useRouter();
    const pid = router.query.productId;
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(pid));
    }, [dispatch, pid]);

    const [isAvailable, setIsAvailable] = useState(false);

    const checkProductAvailability = () => {
        if (product && product.countInStock > 0) {
            setIsAvailable(true);
        } else {
            setIsAvailable(false);
        }
    };

    useEffect(() => {
        checkProductAvailability();
    }, [product]);

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
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    <Col md={4}>
                        <Image
                            src={product && product.image}
                            alt="Product Image"
                            width={400}
                            height={500}
                            priority={true}
                        />
                    </Col>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product && product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    value={product && product.rating}
                                    text={`${product && product.numReviews} reviews`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>Price : ${product && product.price}</ListGroup.Item>
                            <ListGroup.Item>
                                Description : {product && product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>${product && product.price}</strong>
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
            )}
        </>
    );
};

export default ProductDetails;
