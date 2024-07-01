import Head from "next/head";
import Navbar from "@/components/navigation";
import ImageCarousel from "@/components/imageCarousel";
import Intro from "../components/Services"
import ImageGrid from "../components/Ourservices"
import Footer from "../components/Footer"

export default function Home() {
  const images = [
    {
      src: '/homepage (1).jpg',
      alt: 'Image 1',
      text: 'Delivering Exceptional Results'
    },
    {
      src: '/homepage (2).jpg',
      alt: 'Image 2',
      text: 'A Collaborative Partner'
    },
    {
      src: '/homepage (4).jpg',
      alt: 'Image 3',
      text: 'Productive and Efficient Solutions'
    },
    {
      src: '/homepage (5).jpg',
      alt: 'Image 4',
      text: 'Productive and Efficient Solutions'
    },
    {
      src: '/homepage (7).jpg',
      alt: 'Image 5',
      text: 'Productive and Efficient Solutions'
    },
    {
      src: '/homepage (8).jpg',
      alt: 'Image 6',
      text: 'Productive and Efficient Solutions'
    },
  ];

  return (
    <>
      <Head>
        <title>Laciudad</title>
        <link rel="icon" type="image/ico" href="/img/goals.ico" />
      </Head>
      <Navbar />
      <ImageCarousel images={images} />
      <Intro />
      <ImageGrid />
      <Footer />
    </>
  );
}