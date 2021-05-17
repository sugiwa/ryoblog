import Link from 'next/link'

const Header = () => {
    return (
        <header className="font-sans bg-white text-center my-4 mx-auto container overflow-hidden">
            <Link href="/">
                <a className="block text-left">
                    <h1 className="px-auto md:pl-20 text-2xl text-center md:text-left">RyoBlog</h1>
                </a>
            </Link>
        </header>
    )
}

export default Header