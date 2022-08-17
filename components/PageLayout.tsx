import Head from "next/head";

export default function PageLayout(children:JSX.Element) {
    return (
        <>
            <Head>
                <title>Enviado ML</title>
                <meta name="description" content="Productos de Mercado Libre" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}