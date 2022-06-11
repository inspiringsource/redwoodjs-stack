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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
      <h1 className="text-4xl font font-bold tracking-tight text-gray-900 sm:text-6xl mt-8">
        Latest News
      </h1>

      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  )
}
