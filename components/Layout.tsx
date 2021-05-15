import Head from 'next/head'
import Header from '../components/Header'

const Layout = ({children}) => {
    return (
        <>
            <Head>

            </Head>

            <header />
            <main>{children}</main>
        </>
    )
}

export default Layout