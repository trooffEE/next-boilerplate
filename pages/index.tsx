import dynamic from 'next/dynamic'

/**
 * Note: пример страницы, которая не будет доступна поисковикам
 * Используется такой подход исключительно если нет требований к доступности сайта
 */
const LazyLoadedHomePage = dynamic(() => import('@/components/pages/home'), {
  ssr: false
})

export default function Home() {
  return <LazyLoadedHomePage />
}
