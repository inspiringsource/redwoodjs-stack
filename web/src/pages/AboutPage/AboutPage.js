import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <div className="pt-48">
        <h1 className="py-4 px-6 text-4xl font-bold">About</h1>
        <p className="p-8">
          Full-stack app using: React, GraphQL (GraphQL Yoga + Envelop + Apollo
          Client), Prisma, Babel, Webpack, and more.
        </p>
      </div>
    </>
  )
}

export default AboutPage
