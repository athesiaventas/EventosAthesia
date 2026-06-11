import { lazy, Suspense } from 'react'
import Home from './pages/Home'

const WeddingRoute = lazy(() => import('./weddings/WeddingRoute'))

function App() {
  const slug = window.location.pathname.split('/').filter(Boolean)[0]

  if (!slug) {
    return <Home />
  }

  return (
    <Suspense fallback={null}>
      <WeddingRoute slug={slug} />
    </Suspense>
  )
}

export default App
