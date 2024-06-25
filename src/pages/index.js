import Head from "next/head";
import Navbar from "@/components/navigation";
import ImageCarousel from "@/components/imageCarousel";
import Intro from "../components/Services"
import ImageGrid from "../components/Ourservices"
import Footer from "../components/Footer"

export default function Home() {
  const images = [
    {
      src: '/carousel1.jpg',
      alt: 'Image 1',
      text: 'Delivering Exceptional Results'
    },
    {
      src: '/carousel2.jpg',
      alt: 'Image 2',
      text: 'A Collaborative Partner'
    },
    {
      src: '/carousel3.jpg',
      alt: 'Image 3',
      text: 'Productive and Efficient Solutions'
    },
  ];

  return (
    <>
      <Head>
        <title>Caleb's article examples</title>
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