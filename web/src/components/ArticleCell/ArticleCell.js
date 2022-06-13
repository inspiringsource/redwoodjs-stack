import Article from 'src/components/Article'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
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

export const Success = ({ article }) => {
  return <Article article={article} />
}
