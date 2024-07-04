import "@/styles/globals.css";
import 'tailwindcss/tailwind.css';
import BackToTop from '../components/BacktoTop';


export default function App({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />;
    <BackToTop />
    </>
  )
  

}
