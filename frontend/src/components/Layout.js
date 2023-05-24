import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Alex's Shop</title>
                <meta name="description" content="Ecommerce website built with MERN" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <main>{children}</main>
            </div>
        </>
    );
}
