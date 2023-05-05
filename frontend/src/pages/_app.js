import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import { Container } from "react-bootstrap";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
    return (
        <main className={roboto.className}>
            <Header />

            <div className="py-5">
                <Container fluid>
                    <Component {...pageProps} />
                </Container>
            </div>

            <Footer />
        </main>
    );
}
