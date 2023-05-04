import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import Logo from "../../public/img/logo.jpg";
import Image from "next/image";

const Header = () => {
    return (
        <>
            {["sm"].map((expand) => (
                <Navbar key={expand} bg="light" variant="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Link className="fw-bold text-decoration-none relative" href="/">
                            <Image
                                src={Logo}
                                alt="Logo of the website"
                                className="absolute rounded-circle"
                                width={70}
                                height={70}
                                priority
                            />
                        </Link>
                        <span>
                            <h1 className="px-3">Alex's Shop</h1>
                        </span>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                                    <Navbar.Text>
                                        <Link
                                            className="text-decoration-none text-reset px-3"
                                            href="/cart"
                                        >
                                            <i className="fas fa-shopping-cart pe-2"></i>
                                            Cart
                                        </Link>
                                    </Navbar.Text>
                                    <Navbar.Text>
                                        <Link
                                            className="text-decoration-none text-reset px-3"
                                            href="/login"
                                        >
                                            <i className="fas fa-user pe-2"></i>
                                            Sign In
                                        </Link>
                                    </Navbar.Text>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default Header;
