import Link from 'next/link'
import React from 'react'
import footer from '../data/footer'
import SectionAccordion from './SectionAccordion';

interface LinkItem {
  href: string;
  text: string;
}

export interface SectionProps {
  title: string;
  links: LinkItem[];
}


const Footer = () => {

  return (
    <div className='flex flex-col text-extraxs'>
      <div className='w-full p-8'>
        <div className='hidden lg:grid lg:grid-cols-12 lg:gap-6 uppercase'>
        {footer.map((item, index) => (
          <Section key={index} title={item.title} links={item.links} />
        ))}
        </div>
        <div className='flex lg:hidden flex-col'>
        {footer.map((item, index) => (
          <div key={index}>
            <SectionAccordion title={item.title} links={item.links}/>
          </div>
        ))}
        </div>
      </div>
      <div className='border-t py-4 mx-8 border-t-white/30 text-center'>© KOSTÜME 2024</div>
    </div>
  )
}

const Section: React.FC<SectionProps> =  ({ title, links }) => (
  <div className={`${title === "Newsletter" ? 'col-span-4' : 'col-span-2'} flex flex-col gap-y-3`}>
    <p className='font-semibold'>{title}</p>
    {links.map((link, index) => (
      <Link key={index} href={link.href}>{link.text}</Link>
    ))}
  </div>
);


export default Footer;