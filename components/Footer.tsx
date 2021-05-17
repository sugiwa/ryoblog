import Link from 'next/link'

const Footer = () => {
    return(
        <footer className="font-sans bg-black text-white py-8 px-4">
            <div className="mx-auto max-w-xl overflow-hidden flex justify-between items-center">
                <ul className="text-sm text-gray-700 list-none p-0 flex items-center">
                    <Link href='/'>
                        <a className="block mr-4 w-32 text-white">
                            RyoBlog
                        </a>
                    </Link>
                </ul>
            </div>
        </footer>
    )
}

export default Footer