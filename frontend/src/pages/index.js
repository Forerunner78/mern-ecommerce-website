import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Forerunner's Shop</title>
                <meta name="description" content="Ecommerce website built with MERN" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <div>Hello World</div>
            </main>
        </>
    );
}
