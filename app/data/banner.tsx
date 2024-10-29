interface ImageProps { src: string;
title: string;
link: string;
type: "image" | "video";
}

interface ImageSets { desktop: ImageProps[]; mobile: ImageProps[]; }

const banner: ImageSets = {
  desktop: [{ src: '/blue-monday/blue-monday-dt.jpg', title: 'Blue Monday', link: 'https://your-link.com', type: 'image' }],
  mobile: [{ src: '/blue-monday/blue-monday-m.jpg', title: 'Your Banner Title', link: 'https://your-link.com', type: 'image' }],
};

export default banner;
