import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout'
import BackToTop from '../components/BacktoTop';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const imagesLoaded = useRef(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
      imagesLoaded.current = false; // Reset images loaded state on route change
    };

    const handleComplete = (url) => {
      setLoading(false);
      if (!imagesLoaded.current) {
        setLoading(true); // Show loading state until images are fully loaded
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('.next-image');
      console.log(images)

      if (images.length === 0) {
        setLoading(false);
        imagesLoaded.current = true;
      } else {
        let loadedImages = 0;

        const handleImageLoad = () => {
          loadedImages++;
          if (loadedImages === images.length) {
            setLoading(false);
            imagesLoaded.current = true;
          }
        };

        images.forEach((image) => {
          if (image.complete) {
            handleImageLoad();
          } else {
            image.addEventListener('load', handleImageLoad);
          }
        });
      }
    };

    if (router.isReady) {
      checkImagesLoaded();
    }

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-primary z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
        <Component {...pageProps} />
        <BackToTop />
    </div>
  );
}