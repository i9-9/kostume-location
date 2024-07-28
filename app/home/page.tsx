'use client'

import React, { useEffect, useState } from 'react'
import Marquee from '../components/Marquee';
import VideoHero from '../components/VideoHero';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import menuItemsEs from '../data/es-menu'; 
import menuItemsEn from '../data/en-menu';

export type Region = 'Argentina' | 'Worldwide';

export interface MenuItemProps {
  href: string;
  label: string; 
  subcategories: string[];
}

const Home: React.FC = () => {
  const [region, setRegion] = useState<Region>('Argentina');

  useEffect(() => {
    const savedRegion = localStorage.getItem('region') as Region | null;
    if (savedRegion) {
      setRegion(savedRegion);
    }
  }, []);

  const externalLinks: Record<Region, string> = {
    Argentina: 'https://eshop.kostumeweb.net/ar',
    Worldwide: 'https://eshop.kostumeweb.net/us',
  };

  const marqueeText: Record<Region, string>  = {
    Argentina: '3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS · 3 CUOTAS SIN INTERÉS ',
    Worldwide: 'WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING · WORLDWIDE SHIPPING ',
  };

  const menuItem: Record<Region, MenuItemProps[]> = {
    Argentina: menuItemsEs,
    Worldwide: menuItemsEn 
  };

  return (
    <div className='max-w-full min-h-screen bg-black'>
        <Marquee marqueeText={marqueeText[region]} />
        <Header link={externalLinks[region]} menu={menuItem[region]} /> 
        <VideoHero />
        <p className='bg-[#121212] text-xs text-center font-bold p-4 my-4'>
          Original ready-to-wear designed in Buenos Aires. Made in Argentina
        </p>
        <Gallery link={externalLinks[region]} />
        <Footer />
    </div>
  )
}

export default Home;
