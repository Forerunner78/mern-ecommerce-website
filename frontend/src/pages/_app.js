import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "@/GlobalRedux/store";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
    return (
        <>
            <main className={roboto.className}>
                <Provider store={store}>
                    <Header />
                    <Layout>
                        <Container fluid>
                            <Component {...pageProps} />
                        </Container>
                    </Layout>
                    <Footer />
                </Provider>
            </main>
        </>
    );
}
