import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; Alex's Shop</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
