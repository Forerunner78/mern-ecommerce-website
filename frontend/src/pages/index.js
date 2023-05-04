import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "@/screens/HomeScreen";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Head>
                <title>Forerunner's Shop</title>
                <meta name="description" content="Ecommerce website built with MERN" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
            </Head>
            <body>
                <Container>
                    <HomeScreen />
                </Container>
            </body>
        </>
    );
}
