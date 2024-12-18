import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const VideoHero = () => {
  const [region, setRegion] = useState<string | null>(null);

  useEffect(() => {
    // Get the region from localStorage
    const storedRegion = localStorage.getItem('region');
    setRegion(storedRegion);
  }, []);

  const videoUrl = region === 'Argentina' 
    ? 'https://eshop.kostumeweb.net/ar/48ss25' 
    : 'https://eshop.kostumeweb.net/us/48ss25/'; // Update to the appropriate URL for the worldwide region

  return (
    <div className="relative" style={{ paddingTop: '56.25%' }}>
      <Link href={videoUrl} className="absolute top-0 left-0 w-full h-full z-10" />
      <iframe 
        src="https://player.vimeo.com/video/1040442547?title=0&byline=0&portrait=0&controls=0&muted=1&autoplay=1&loop=1&quality=1080p"
        className="absolute top-0 left-0 w-full h-full" 
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default VideoHero;
