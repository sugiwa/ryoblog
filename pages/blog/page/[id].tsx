import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/Layout'
import Pagination from '../../../components/Pagination'
import {format, parseISO} from 'date-fns'

const BlogPageId = ({blogs, totalCount, pageId}) => {
    return (
        <Layout
            title = {`Blog一覧${pageId}`}
            description = {`Blog一覧の${pageId}ページです。`}
            url = {`/blog/page/${pageId}`}
            image = ""
        >
            <nav className="bg-white py-4 font-sans">
                <div className="container m-auto flex justify-center items-baseline md:justify-start border-b-2 border-gray-300">
                  <Link href="/"><a><h2 className="text-base font-bold tracking-wide uppercase py-4 px-6 border-b-2 border-black -mb-4">Blog</h2></a></Link>
                  <Link href="/category"><a><h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6">Category</h2></a></Link>
                  <Link href="/about"><a><h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6">About</h2></a></Link>
                </div>
            </nav>

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
                                                width={600} height={337} layout={"responsive"}
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
                <Pagination totalCount={totalCount} pageId={pageId} />
            </section>
        </Layout>

    )
}

export default BlogPageId

//静的生成のためのパスを指定
export const getStaticPaths: GetStaticPaths = async() => {
    const key = {
      headers: {"X-API-KEY": process.env.API_KEY},
    };
    const res = await fetch("https://ryoblg.microcms.io/api/v1/blog?limit=100", key)

    const repos = await res.json();

    const PER_PAGE = 6;

    const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)
    
    const paths = range(1,Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`)
    return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async context => {
    const id = parseInt(context.params.id[0]);

    const key = {
      headers: {'X-API-KEY': process.env.API_KEY},
    };
    const data = await fetch(`https://ryoblg.microcms.io/api/v1/blog?offset=${(id - 1) * 6}&limit=6`, key)
      .then(res => res.json())
      .catch(() => null);
      
    return {
      props: {
        blogs: data.contents,
        totalCount: data.totalCount,
        pageId: id
      },
    };
};