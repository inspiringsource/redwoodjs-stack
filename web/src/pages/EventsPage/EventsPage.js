import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const EventsPage = () => {
  return (
    <>
      <MetaTags title="Events" description="Events page" />

      <ArticlesCell />
    </>
  )
}

export default EventsPage
