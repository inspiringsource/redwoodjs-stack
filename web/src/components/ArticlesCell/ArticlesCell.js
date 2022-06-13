import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => (
  <div className="text-black pt-48 p-8 py-4 px-6 text-4xl text-center">
    Loading...
  </div>
)

export const Empty = () => (
  <div className="text-black pt-48 p-8 py-4 px-6 text-4xl text-center">
    Empty
  </div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <div className="pt-48 p-8">
      <h1 className="py-4 px--2 text-4xl font-bold">Latest News</h1>

      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}
