import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "@/screens/HomeScreen";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Head>
                <title>Alex's Shop</title>
                <meta name="description" content="Ecommerce website built with MERN" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <Container>
                    <HomeScreen />
                </Container>
            </main>
        </>
    );
}
