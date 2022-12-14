import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FN-dev Portfolio</title>
        <meta
          name="Web Dev Portfolio with NextJS & TailwindCSS"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="FN-dev" message="Something something complete" />
      <Navbar />
    </div>
  );
}
