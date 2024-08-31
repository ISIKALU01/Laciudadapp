import Link from 'next/link';
import Image from 'next/image'


export default function LogoLink() {
  return (
    <div className="mx-5 sm:px-10">
      <Link href="/">
        <div class='h-full'>
        <Image
            src="/LaCiudadcropped.png"
            alt="Your Brand Logo"
            width={100}
            height={100}
        />
        </div>
      </Link>
    </div>
  );
}