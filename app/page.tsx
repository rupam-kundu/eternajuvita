'use client';
import Head from 'next/head';
import Image from "next/image";
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return (
    <div className='bg-white'>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
