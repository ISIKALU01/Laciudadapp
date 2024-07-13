import Head from "next/head";
import ImageCarousel from "../components/home/imageCarousel";
import Intro from "../components/home/Services"
import ImageGrid from "../components/home/Ourservices"
import ExploreSection from "../components/home/explore"
import Footer from "../components/Footer"


export default function Home() {
  const images = [
    {
      src: '/carouselone (1).jpg',
      alt: 'Image 1',
      text: 'RHAPSODYS, ABUJA'
    },
    {
      src: '/carouseltwo (1).jpg',
      alt: 'Image 2',
      text: 'RHAPSODYS, ABUJA'
    },
    {
      src: '/carouselthree.jpg',
      alt: 'Image 3',
      text: 'RHAPSODYS, ABUJA'
    },
    {
      src: '/carouselfour (1).jpg',
      alt: 'Image 4',
      text: 'RHAPSODYS, ABUJA'
    },
    {
      src: '/carouselfive.jpg',
      alt: 'Image 5',
      text: 'LA CIUDAD MALL, IKOTA LAGOS'
    },
    {
      src: '/carouselsix.jpg',
      alt: 'Image 6',
      text: 'LA CIUDAD MALL, IKOTA LAGOS'
    },
    {
      src: '/carouselseven.jpg',
      alt: 'Image 6',
      text: 'LA CIUDAD MALL, IKOTA LAGOS'
    },
    {
      src: '/carouseleight.jpg',
      alt: 'Image 6',
      text: 'LA CIUDAD MALL, IKOTA LAGOS'
    }
  ];

  return (
    <>
      <Head>
        <title>Laciudad</title>
        <link rel="icon" type="image/ico" href="/img/goals.ico" />
      </Head>
      <ImageCarousel images={images} />
      <Intro />
      <ImageGrid />
      <ExploreSection />
      <Footer />
    </>
  );
}