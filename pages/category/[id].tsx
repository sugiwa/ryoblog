import {GetStaticProps, GetStaticPaths} from 'next'

const BlogId = ({ blog }) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <img src={blog.image.url} />
      <p className="m-6">{blog.publishedAt}</p>
      <div className='m-10'
        dangerouslySetInnerHTML = {{
          __html: `${blog.body}`,
        }}
      />
    </main>
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
  
  const paths = data.contents.map(content => `/category/${content.id}`);
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

  console.log(data)

  return {
    props: {
      blog: data,
    }
  }
}