import './wedding.css'
import { findWeddingBySlug, weddings } from './data/weddings'
import { NotFoundPage } from './pages/NotFoundPage'
import { WeddingPage } from './pages/WeddingPage'

type WeddingRouteProps = {
  slug: string
}

export default function WeddingRoute({ slug }: WeddingRouteProps) {
  const wedding = findWeddingBySlug(slug)

  if (!wedding) {
    return <NotFoundPage weddings={weddings} />
  }

  return <WeddingPage wedding={wedding} />
}
