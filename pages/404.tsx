import {GetStaticProps} from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import {format, parseISO} from 'date-fns'

const Custom404 = ({blogs}) => {
    return (
        <Layout
            title = "ページが見つかりません"
            description = "ページが見つかりません。"
            url = "/404"
            image = ""
        >
            <nav className="bg-white py-4 font-sans">
                <div className="container m-auto flex items-baseline justify-center md:justify-start border-b-2 border-gray-300">
                <h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6"><Link href="/"><a>Blog</a></Link></h2>
                <h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6"><Link href="/category"><a>Category</a></Link></h2>
                <h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6"><Link href="/about"><a>About</a></Link></h2>
                </div>
            </nav>
            <h2 className="text-center text-2xl my-20">ページが見つかりません。</h2>
        
            <section className="bg-white py-4 font-sans">
                <h1 className="text-center text-4xl pb-10">記事一覧</h1>
                <div className="container m-auto px-10 flex flex-wrap items-center justify-start">
                    {blogs.map(blog => {
                        return (
                            <div className="w-full md:w-1/2 flex flex-col mb-8 px-5" key={blog.id}>
                                <Link href={`blog/post/${blog.id}`}>
                                    <a>
                                        <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition group hover:bg-white hover:shadow-lg hover:border-transparent">
                                            <img className="w-full group-hover:text-gray-900" src={blog.image.url} alt={blog.title}/>
                                            <div className="p-6 flex flex-col justify-between group-hover:text-gray-900">
                                                <h3 className="font-medium text-gray-900 mb-4 leading-normal">
                                                    {blog.title}
                                                </h3>
                                                <p>
                                                    {blog.category.map(ctg => {
                                                        return (
                                                            <span>{ctg.title} </span>
                                                        )
                                                    })}
                                                </p>
                                                <p>{format(parseISO(blog.createdAt), "yyyy/MM/dd")}</p>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </Layout>
    )
}

export default Custom404

export const getStaticProps: GetStaticProps = async() => {
    const key = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const blogs = await fetch("https://ryoblg.microcms.io/api/v1/blog?limit=4", key)
      .then(res => res.json())
      .catch(() => null);
      
    return {
      props: {
        blogs: blogs.contents,
      },
    };
};