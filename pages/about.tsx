import React from 'react'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import {format, parseISO} from 'date-fns'

const About = ({blogs}) => {
    return (
        <Layout
            title = "About"
            description = "Aboutページです。"
            url = "/about"
            image = ""
        >
            <nav className="bg-white py-4 font-sans">
                <div className="container m-auto flex justify-center items-baseline md:justify-start border-b-2 border-gray-300">
                    <h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6"><Link href="/"><a>Blog</a></Link></h2>
                    <h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6"><Link href="/category"><a>Category</a></Link></h2>
                    <h2 className="text-base font-bold tracking-wide uppercase py-4 px-6 border-b-2 border-black -mb-4"><Link href="/about"><a>About</a></Link></h2>
                </div>
            </nav>

            <section className="bg-white py-4 font-sans">
                <h1 className="text-center text-4xl pb-10">記事一覧</h1>
                <div className="container m-auto md:px-10 flex flex-wrap items-center justify-start">
                    {blogs.map(blog => {
                        return (
                            <div className="w-full md:w-1/2 flex flex-col mb-8 px-5" key={blog.id}>
                                <Link href={`blog/post/${blog.id}`}>
                                    <a>
                                        <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition group hover:bg-white hover:shadow-lg hover:border-transparent">
                                            <img className="w-full group-hover:text-gray-900" src={blog.image.url} alt={blog.image.title}/>
                                            <div className="p-6 flex flex-col justify-between group-hover:text-gray-900">
                                                <h3 className="font-medium text-gray-900 mb-4 leading-normal">
                                                    {blog.title}
                                                </h3>
                                                <p className="">
                                                    {blog.category.map(ctg => {
                                                        return (
                                                            <span>{ctg.title} </span>
                                                        )
                                                    })}
                                                </p>
                                                <p className="">{format(parseISO(blog.createdAt), "yyyy/MM/dd")}</p>
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

export default About

export const getStaticProps: GetStaticProps = async() => {
    const key = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const data = await fetch("https://ryoblg.microcms.io/api/v1/blog", key)
      .then(res => res.json())
      .catch(() => null);
      
    return {
      props: {
        blogs: data.contents,
      },
    };
};