import {GetStaticProps, GetStaticPaths} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/Layout'
import {format, parseISO} from 'date-fns'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css';

const BlogId = ({ blog, blogs, highlightedBody }) => {
  return (
    <Layout
      title = {blog.title}
      description = {blog.description}
      url = {`/blog/post/${blog.id}`}
      image = {blog.image.url}
    >
      <nav className="bg-white py-4 font-sans">
        <div className="container m-auto flex items-baseline justify-center md:justify-start border-b-2 border-gray-300">
          <Link href="/"><a><h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6">Blog</h2></a></Link>
          <Link href="/category"><a><h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6">Category</h2></a></Link>
          <Link href="/about"><a><h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6">About</h2></a></Link>
        </div>
      </nav>

      <section className="font-sans container m-auto flex flex-col py-8 max-w-3xl text-center px-6">
        <label className="text-sm uppercase">{format(parseISO(blog.createdAt), "yyyy/MM/dd")}</label>
        <h1 className="mt-8 mb-5 max-w-full m-auto text-3xl md:text-4xl lg:text-5xl font-medium">{blog.title}</h1>
        <p className="mb-10">
          {blog.category.map(ctg => {
            return (
              <Link href={`/category/${ctg.id}`} key={ctg.id}>
                <a className="py-1 mx-2 rounded-lg shadow hover:shadow-raised hover:translateY-2px transition group hover:bg-white hover:shadow-lg hover:border-transparent">
                  <span className="px-2">{ctg.title}</span>
                </a>
              </Link>　
            )
          }
          )}
        </p>
        <div className="mt-1 lg:mt-4 m-auto leading-loose mb-6 text-left max-w-full"
          dangerouslySetInnerHTML = {{
            __html: `${highlightedBody}`,
          }}
        />
      </section>

      <section className="bg-white py-4 font-sans m-auto max-w-3xl px-6">
        <h2 className="text-3xl border-b-2 pb-2 text-center">最新記事</h2>
        <div className="container container max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
          {blogs.map(blog => {
            return (
              <div className="w-full md:w-1/2 py-3 md:p-3" key={blog.id}>
                <Link href={`/blog/post/${blog.id}`}>
                  <a>
                    <div className="flex flex-row md:flex-col rounded overflow-hidden h-auto border shadow group hover:shadow-raised hover:translateY-2px hover:bg-white hover:shadow-lg hover:border-transparent">
                      <Image className="block h-auto md:w-full flex-none bg-cover group-hover:text-gray-900"
                          src={blog.image.url} width={200} height={140} alt={blog.title}/>
                      <div className="w-3/4 md:w-full bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal group-hover:text-gray-900">
                        <h4 className="line-clamp-2 text-black font-bold text-xl mb-2 leading-tight">{blog.title}</h4>
                        <p className="text-gray-700 text-base">{format(parseISO(blog.createdAt), "yyyy/MM/dd")}</p>
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

export default BlogId

//静的生成のためのパスを指定
export const getStaticPaths: GetStaticPaths = async() => {
  const key = {
    headers: {"X-API-KEY": process.env.API_KEY},
  };
  const data = await fetch("https://ryoblg.microcms.io/api/v1/blog?limit=100", key)
    .then(res => res.json())
    .catch(() => null);
  
  const paths = data.contents.map(content => `/blog/post/${content.id}`);
  return {paths, fallback: false};
}

// データをテンプレートに受け渡す部分の処理
export const getStaticProps: GetStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {"X-API-KEY": process.env.API_KEY},
  };

  // 記事を受け取りリッチテキストを装飾
  const data = await fetch("https://ryoblg.microcms.io/api/v1/blog/" + id, key,)
    .then(res => res.json())
    .catch(() => null)
    
    const $ = cheerio.load(data.body);
    // 本文装飾
    $('h2').addClass('text-3xl bg-gray-300 p-2')
    $('h3').addClass('text-2xl border-b-2 pb-2')
    $('code').addClass('bg-red-100 text-red-400 px-1 rounded-md')
    $('a').addClass('text-blue-500')
    
    // シンタックスハイライト
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass('hljs');
    })

    const blogs = await fetch("https://ryoblg.microcms.io/api/v1/blog?limit=4", key,)
      .then(res => res.json())
      .catch(() => null)
    
    return {
      props: {
      blog: data,
      blogs: blogs.contents,
      highlightedBody: $.html()
    }
  }
}