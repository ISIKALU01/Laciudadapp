import Link from 'next/link';
import Image from 'next/image'


export default function LogoLink() {
  return (
    <div className="mx-5 sm:px-10">
      <Link href="/">
        <div class='relative h-20 w-40 bg-appgray bg-opacity-10'>
          <div className="absolute inset-0 bg-appgray bg-opacity-10">
           <Image
            src="/LaCiudadcropped.webp"
            alt="Your Brand Logo"
            layout="fill"
            objectFit="contain" 
            objectPosition="center"
           />
          </div>
        </div>
      </Link>
    </div>
  );
}