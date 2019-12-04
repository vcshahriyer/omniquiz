const images = [
  {
    link: "/img/9.jpg",
    id: 9
  },
  {
    link: "/img/10.jpg",
    id: 10
  },
  {
    link: "/img/11.jpg",
    id: 11
  },
  {
    link: "/img/12.jpg",
    id: 12
  },
  {
    link: "/img/13.jpg",
    id: 13
  },
  {
    link: "/img/15.jpg",
    id: 15
  },
  {
    link: "/img/16.jpg",
    id: 16
  },
  {
    link: "/img/17.jpg",
    id: 17
  },
  {
    link: "/img/19.jpg",
    id: 19
  },
  {
    link: "/img/14.jpg",
    id: 14
  },
  {
    link: "/img/21.jpg",
    id: 21
  },
  {
    link: "/img/24.jpg",
    id: 24
  },
  {
    link: "/img/26.jpg",
    id: 26
  },
  {
    link: "/img/28.jpg",
    id: 28
  },
  {
    link: "/img/31.jpg",
    id: 31
  }
];

export default function getImage(id) {
  let imageLink = "/img/default.jpg";
  images.forEach(image => {
    if (image.id === id) imageLink = image.link;
  });
  return imageLink;
}
