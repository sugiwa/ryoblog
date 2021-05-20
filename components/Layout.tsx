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
                <meta name="theme-color" content="#fff" />
                <link rel="icon" href='/icons/icon-128x128.png' />
                <link rel="shortcut icon" href='/icons/icon-128x128.png'/>
                <link rel="apple-touch-icon" href='/icons/icon-128x128.png'/>
                <link rel="manifest" href="/manifest.json" />
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.TRACKING_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                    `,
                    }}
                />
            </Head>

            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout