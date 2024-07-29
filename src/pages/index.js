import Head from "next/head";
import ImageCarousel from "../components/home/imageCarousel";
import Intro from "../components/home/Services"
import ImageGrid from "../components/home/Ourservices"
import ExploreSection from "../components/home/explore"
import Footer from "../components/Footer"


export default function Home() {
  const images = [
    {
      src: '/landingImage (1).jpg',
      alt: 'Image 1',
      text: 'RHAPSODYS, ABUJA'
    },
    {
      src: '/landingImage (2).jpg',
      alt: 'Image 2',
      text: 'RHAPSODYS, ABUJA'
    },
    {
      src: '/landingImage (3).jpg',
      alt: 'Image 3',
      text: 'RHAPSODYS, ABUJA'
    },
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