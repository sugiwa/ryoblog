import {GetStaticProps, GetStaticPaths} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../../components/Layout'
import {format, parseISO} from 'date-fns'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css';

const BlogId = ({ blog, highlightedBody }) => {
  return (
    <Layout>
      <nav className="bg-white py-4 font-sans">
        <div className="container m-auto flex items-baseline justify-center md:justify-start border-b-2 border-gray-300">
          <h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6"><Link href="/"><a>Blog</a></Link></h2>
          <h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6"><Link href="/category"><a>Category</a></Link></h2>
          <h2 className="text-gray-700 text-base font-bold tracking-wide uppercase py-4 px-6"><Link href="/about"><a>About</a></Link></h2>
        </div>
      </nav>

      <section className="font-sans container m-auto flex flex-col py-8 max-w-3xl text-center px-6">
        <label className="text-sm uppercase">{format(parseISO(blog.createdAt), "yyyy/MM/dd")}</label>
        <h1 className="mt-8 mb-3 max-w-full m-auto text-3xl md:text-4xl lg:text-5xl font-medium">{blog.title}</h1>
        <p className="text-center text-blue-500">
          {blog.category.map(ctg => {
            return (
              <span>
                <Link href={`/category/${ctg.id}`}>
                  <a>{ctg.title}</a>
                </Link>
              </span>
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
        <h2 className="text-3xl border-b-2 pb-2 text-center">関連記事</h2>
        <div className="container container max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
          <div className="w-full md:w-1/2 py-3 md:p-3">
            <Link href={`blog/post/${blog.url}`}>
              <a>
                <div className="flex flex-row md:flex-col rounded overflow-hidden h-auto border shadow shadow-lg">
                  <Image className="block h-auto w-full flex-none bg-cover"
                      src={blog.image.url} width={200} height={140}/>
                  <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="text-black font-bold text-xl mb-2 leading-tight">{blog.title}</div>
                    <p className="text-gray-700 text-base">{blog.createdAt}</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full md:w-1/2 py-3 md:p-3">
            <Link href={`blog/post/${blog.url}`}>
              <a>
                <div className="flex flex-row md:flex-col rounded overflow-hidden h-auto border shadow shadow-lg">
                  <Image className="block h-auto w-full flex-none bg-cover"
                      src={blog.image.url} width={200} height={140}/>
                  <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="text-black font-bold text-xl mb-2 leading-tight">{blog.title}</div>
                    <p className="text-gray-700 text-base">{blog.createdAt}</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
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
  const data = await fetch("https://ryoblg.microcms.io/api/v1/blog", key)
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

    console.log(data)

  return {
    props: {
      blog: data,
      highlightedBody: $.html()
    }
  }
}