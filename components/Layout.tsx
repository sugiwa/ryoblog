import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({title, description, url, image, children}) => {

    const tit = title 
        ? `${title} | RyoBlog`
        : "RyoBlog"
    const desc = description || "RyoBlogです。プログラミングを学習する上で学んだことを発信しています。"

    return (
        <>
            <Head>
                <title>{tit}</title>
                <meta name="description" content={desc} />
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <meta property="og:title" content={tit} />
                <meta property="og:description" content={desc} />
                <meta property="og:type" content="blog" />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={image} />
                <meta property="og:site_name" content={tit} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content={image} />
                <meta name="twitter:title" content={tit} />
                <meta name="twitter:description" content={desc} />
                <meta name="twitter:image" content={image} />
                <link rel="icon" href='/public/book.svg' />
                <link
                    rel="shortcut icon"
                    href='/public/book.svg'
                />
                <link
                    rel="apple-touch-icon"
                    href='http://www.w3.org/2000/svg'
                />
            </Head>

            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout