import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "@/GlobalRedux/store";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <main className={roboto.className}>
                <Provider store={store}>
                    <Header />

                    <div className="layout">
                        <Container fluid>
                            <Component {...pageProps} />
                        </Container>
                    </div>

                    <Footer />
                </Provider>
            </main>
        </>
    );
}
