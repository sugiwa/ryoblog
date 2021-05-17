import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return (
        <>
            <Head>

            </Head>

            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout