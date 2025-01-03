interface ImageProps {
  src: string;
  title: string;
  link: string;
  type: "image" | "video";
}

interface ImageSets {
  desktop: ImageProps[];
  mobile: ImageProps[];
}

const images: ImageSets = {
  desktop: [
    { src: '/48_desktop_2.jpg', title: '#48SS25', link: "48ss25/", type: "image" },
    { src: '/runway_grande.jpg', title: 'RUNWAY LOOKS', link: "runway-looks/", type: "image" },
    { src: '/video/women.mp4', title: 'KOSTÜME WOMEN', link: "women/", type: "video" },
    { src: '/img/kostume_m.jpg', title: 'KOSTÜME MEN', link: "men/", type: "image"},
    { src: '/video/runway.mp4', title: 'RUNWAY LOOKS', link: "runway-looks/", type: "video"  },
    { src: '/img/store_g.jpg', title: 'KOSTÜME STORE', link: "https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7", type: "image" },
  ],
  mobile: [
    { src: '/48ss25_mobile.jpg', title: '#48SS25', link: "48ss25/", type: "image" },
    { src: '/runway_mobile.jpg', title: 'RUNWAY LOOKS', link: "runway-looks/", type: "image" },
    { src: '/video/women_mobile.mp4', title: 'KOSTÜME WOMEN', link: "women/", type: "video" },
    { src: '/img/men_ch.jpg', title: 'KOSTÜME MEN', link: "men/", type: "image"},
    { src: '/video/runway_mobile.mp4', title: 'RUNWAY LOOKS', link: "runway-looks/", type: "video"},
    { src: '/img/store_ch.jpg', title: 'KOSTÜME STORE', link: "https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7", type: "image" },
  ]
};

export default images;
