import "@/styles/globals.css";
import 'tailwindcss/tailwind.css';
import BackToTop from '../components/BacktoTop';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false)
    }
    const handleComplete = (url) => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    if (router.isReady) {
      // Simulate a delay to make the loading state more noticeable
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])


  return (
    <div>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gray/50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    <Component {...pageProps} />;
    <BackToTop />
    </div>
  )
  

}
