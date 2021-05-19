import Link from 'next/link'

const Footer = () => {
    return(
        <footer className="font-sans bg-black text-white py-8 px-4">
                <div className="text-center text-sm text-gray-700 list-none p-0 flex items-center">
                    <Link href='/'>
                        <a href="/" className="block mx-auto w-32 text-white">
                            RyoBlog
                        </a>
                    </Link>
                </div>
        </footer>
    )
}

export default Footer