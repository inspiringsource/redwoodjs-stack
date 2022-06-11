import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <h3>About</h3>
      <p>
        Full-stack Redwood app using: React, GraphQL (GraphQL Yoga + Envelop +
        Apollo Client), Prisma, Babel, Webpack, and more.
      </p>
    </>
  )
}

export default AboutPage
