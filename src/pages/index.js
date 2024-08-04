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
      text: 'Welcome To La Ciudad Construction Limited',
    },
    {
      src: '/landingImage (2).jpg',
      alt: 'Image 2',
      text: 'Our vision is to pioneer new technologies and methodologies to deliver superior results in the construction industry. '
    },
    {
      src: '/landingImage (3).jpg',
      alt: 'Image 3',
      text: 'Our mission is to deliver diligent and efficient services that cater to the specific needs of our clients. '
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