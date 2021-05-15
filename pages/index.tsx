import React from 'react'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home = ({blogs}) => {
  return (
    <Layout>
      <h1>ブログ一覧</h1>
      <div>
        {blogs.map(blog => {
          return (
          <div key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>
                <Image src={blog.image.url} width='300' height='250'/>
                <p>{blog.title}</p>
              </a>
            </Link>
          </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async() => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch("https://ryoblg.microcms.io/api/v1/blog", key)
    .then(res => res.json())
    .catch(() => null);

  console.log(data.contents.image)
  
  return {
    props: {
      blogs: data.contents,
    },
  };
};