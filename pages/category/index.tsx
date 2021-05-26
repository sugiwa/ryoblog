import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import {format, parseISO} from 'date-fns'

const About = ({blogs, categories}) => {
    return (
        <Layout
            title = "カテゴリー一覧"
            description = "カテゴリー一覧です。"
            url = "/category"
            image = ""
        >
            <nav className="bg-white py-4 font-sans">
                <div className="container m-auto flex justify-center items-baseline md:justify-start border-b-2 border-gray-300">
                  <Link href="/"><a><h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6">Blog</h2></a></Link>
                  <Link href="/category"><a><h2 className="text-base font-bold tracking-wide uppercase py-4 px-6 border-b-2 border-black -mb-4">Category</h2></a></Link>
                  <Link href="/about"><a><h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6">About</h2></a></Link>
                </div>
            </nav>

            <section className="bg-white py-4 font-sans">
                <h1 className="text-center text-4xl pb-10">カテゴリー一覧</h1>
                <div className="container flex flex-wrap justify-start mx-auto w-3/4">
                    {categories.map(category => {
                        return (
                            <div className="flex flex-col mb-3 px-1 sm:px-5" key={category.id}>
                                <Link href={`/category/${category.id}`}>
                                    <a>
                                        <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition group hover:bg-white hover:shadow-lg hover:border-transparent">
                                            <div className="px-3 py-3 flex flex-col justify-between group-hover:text-gray-900">
                                                <h3 className="font-medium text-gray-900 leading-normal">
                                                    {category.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
            
            <section className="bg-white py-4 font-sans">
                <h1 className="text-center text-4xl pb-10">記事一覧</h1>
                <div className="container m-auto md:px-10 flex flex-wrap items-center justify-start">
                    {blogs.map(blog => {
                        return (
                            <div className="w-full md:w-1/2 flex flex-col mb-8 px-5" key={blog.id}>
                                <Link href={`/blog/post/${blog.id}`}>
                                    <a>
                                        <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition group hover:bg-white hover:shadow-lg hover:border-transparent">
                                            <Image className="w-full group-hover:text-gray-900" src={blog.image.url} alt={blog.title}
                                                width={600} height={337} layout={'responsive'}
                                            />
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

export default About

export const getStaticProps: GetStaticProps = async() => {
    const key = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const blogs = await fetch("https://ryoblg.microcms.io/api/v1/blog", key)
      .then(res => res.json())
      .catch(() => null);

    const categories = await fetch("https://ryoblg.microcms.io/api/v1/category", key)
      .then(res => res.json())
      .catch(() => null);
      
    return {
      props: {
        blogs: blogs.contents,
        categories: categories.contents,
      },
    };
};