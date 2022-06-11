import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <>
      <article key={article.id}>
        <header>
          <h1 className="text-4xl font font-bold tracking-tight text-gray-900 sm:text-4xl mt-8">
            <Link to={routes.article({ id: article.id })}>{article.title}</Link>
          </h1>
        </header>
        <p className="mt-4 text-xl text-gray-500 w-[42rem]">{article.body}</p>
        <small>
          Posted date: {article.createdAt.slice(0, 10)} at{' '}
          {article.createdAt.slice(11, 20)}{' '}
        </small>
      </article>
    </>
  )
}

export default Article
