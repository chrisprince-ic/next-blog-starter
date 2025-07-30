const posts = [
  // Style (5 posts)
  {
    id: 'xghft5',
    image: '/p1.jpeg',
    date: '1 day ago',
    category: 'Style',
    author: 'Alice Johnson',
    title: 'How to Nail the Classic Style',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum fugiat ipsam quod inventore.',
    link: '/blog/post1'
  },
  {
    id: 'd9w2mk',
    image: '/p1.jpeg',
    date: '2 days ago',
    category: 'Style',
    author: 'Bob Smith',
    title: 'Top 10 Style Tips for Summer',
    content: 'Deserunt aspernatur fugit debitis a aliquam sequi reiciendis excepturi ratione earum.',
    link: '/blog/post2'
  },
  {
    id: '1pj7az',
    image: '/p1.jpeg',
    date: '3 days ago',
    category: 'Style',
    author: 'Claire Evans',
    title: 'Sustainable Style: Eco-Friendly Fashion Choices',
    content: 'Excepturi ratione earum repudiandae facere minus, ipsum dolor sit amet consectetur.',
    link: '/blog/post3'
  },
  {
    id: 'vnm3kw',
    image: '/p1.jpeg',
    date: '4 days ago',
    category: 'Style',
    author: 'David Lee',
    title: 'Street Style Looks to Try Now',
    content: 'Ipsam quod inventore, deserunt aspernatur fugit, debitis a aliquam sequi reiciendis.',
    link: '/blog/post4'
  },
  {
    id: 'wq5nld',
    image: '/p1.jpeg',
    date: '5 days ago',
    category: 'Style',
    author: 'Eva Green',
    title: 'Accessories That Transform Your Outfit',
    content: 'Facere minus, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat ipsam quod.',
    link: '/blog/post5'
  },

  // Fashion (5 posts)
  {
    id: 'uy7x4q',
    image: '/p1.jpeg',
    date: '6 days ago',
    category: 'Fashion',
    author: 'Frank White',
    title: 'The Evolution of Fashion Trends in 2025',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum fugiat ipsam quod inventore.',
    link: '/blog/post6'
  },
  {
    id: '2abgmr',
     image: '/p1.jpeg',
    date: '7 days ago',
    category: 'Fashion',
    author: 'Grace Kim',
    title: 'How to Style Vintage Fashion Pieces',
    content: 'Deserunt aspernatur fugit debitis a aliquam sequi reiciendis excepturi ratione earum.',
    link: '/blog/post7'
  },
  {
    id: 'ht5p9d',
     image: '/p1.jpeg',
    date: '8 days ago',
    category: 'Fashion',
    author: 'Henry Adams',
    title: 'Fashion Icons Who Changed the Industry',
    content: 'Excepturi ratione earum repudiandae facere minus, ipsum dolor sit amet consectetur.',
    link: '/blog/post8'
  },
  {
    id: 'qv1e2c',
    image: '/p1.jpeg',
    date: '9 days ago',
    category: 'Fashion',
    author: 'Ivy Turner',
    title: 'Must-Have Fashion Items for Every Season',
    content: 'Ipsam quod inventore, deserunt aspernatur fugit, debitis a aliquam sequi reiciendis.',
    link: '/blog/post9'
  },
  {
    id: 'ljzk04',
    image: '/p10.jpeg',
    date: '10 days ago',
    category: 'Fashion',
    author: 'Jack Martin',
    title: 'How to Build a Capsule Wardrobe',
    content: 'Facere minus, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat ipsam quod.',
    link: '/blog/post10'
  },

  // Food (5 posts)
  {
    id: 'g8pryt',
    image: '/p11.jpeg',
    date: '11 days ago',
    category: 'Food',
    author: 'Karen Phillips',
    title: 'Delicious Vegan Recipes You Must Try',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum fugiat ipsam quod inventore.',
    link: '/blog/post11'
  },
  {
    id: 'mjvso9',
    image: '/p12.jpeg',
    date: '12 days ago',
    category: 'Food',
    author: 'Liam Walker',
    title: 'The Art of Baking Perfect Bread',
    content: 'Deserunt aspernatur fugit debitis a aliquam sequi reiciendis excepturi ratione earum.',
    link: '/blog/post12'
  },
  {
    id: '9xfqtg',
    image: '/p13.jpeg',
    date: '13 days ago',
    category: 'Food',
    author: 'Mia Brown',
    title: 'Exploring Street Food Around the World',
    content: 'Excepturi ratione earum repudiandae facere minus, ipsum dolor sit amet consectetur.',
    link: '/blog/post13'
  },
  {
    id: 'rul7hx',
    image: '/p14.jpeg',
    date: '14 days ago',
    category: 'Food',
    author: 'Noah Wilson',
    title: 'Healthy Smoothie Recipes for Beginners',
    content: 'Ipsam quod inventore, deserunt aspernatur fugit, debitis a aliquam sequi reiciendis.',
    link: '/blog/post14'
  },
  {
    id: 'pkc5vw',
    image: '/p15.jpeg',
    date: '15 days ago',
    category: 'Food',
    author: 'Olivia Davis',
    title: 'How to Host a Perfect Dinner Party',
    content: 'Facere minus, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat ipsam quod.',
    link: '/blog/post15'
  },

  // Travel (5 posts)
  {
    id: 'edr9bz',
    image: '/p16.jpeg',
    date: '16 days ago',
    category: 'Travel',
    author: 'Paul Harris',
    title: 'Top 10 Travel Destinations in 2025',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum fugiat ipsam quod inventore.',
    link: '/blog/post16'
  },
  {
    id: 'o7w42k',
    image: '/p17.jpeg',
    date: '17 days ago',
    category: 'Travel',
    author: 'Quinn Moore',
    title: 'How to Travel on a Budget',
    content: 'Deserunt aspernatur fugit debitis a aliquam sequi reiciendis excepturi ratione earum.',
    link: '/blog/post17'
  },
  {
    id: 'sv9zhe',
    image: '/p18.jpeg',
    date: '18 days ago',
    category: 'Travel',
    author: 'Rachel Scott',
    title: 'Cultural Etiquette Tips for Travelers',
    content: 'Excepturi ratione earum repudiandae facere minus, ipsum dolor sit amet consectetur.',
    link: '/blog/post18'
  },
  {
    id: 'tq3nvb',
    image: '/p19.jpeg',
    date: '19 days ago',
    category: 'Travel',
    author: 'Samuel Young',
    title: 'Best Hiking Trails Worldwide',
    content: 'Ipsam quod inventore, deserunt aspernatur fugit, debitis a aliquam sequi reiciendis.',
    link: '/blog/post19'
  },
  {
    id: 'kzlx87',
    image: '/p20.jpeg',
    date: '20 days ago',
    category: 'Travel',
    author: 'Tina Brown',
    title: 'Travel Photography Tips for Beginners',
    content: 'Facere minus, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat ipsam quod.',
    link: '/blog/post20'
  },

  // Culture (5 posts)
  {
    id: 'hwj6ua',
    image: '/p21.jpeg',
    date: '21 days ago',
    category: 'Culture',
    author: 'Uma Patel',
    title: 'Understanding World Cultures',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum fugiat ipsam quod inventore.',
    link: '/blog/post21'
  },
  {
    id: 'cz9dkp',
    image: '/p22.jpeg',
    date: '22 days ago',
    category: 'Culture',
    author: 'Victor Chen',
    title: 'The Role of Art in Society',
    content: 'Deserunt aspernatur fugit debitis a aliquam sequi reiciendis excepturi ratione earum.',
    link: '/blog/post22'
  },
  {
    id: 'p4xnrb',
    image: '/p23.jpeg',
    date: '23 days ago',
    category: 'Culture',
    author: 'Wendy Gomez',
    title: 'Cultural Festivals Worth Visiting',
    content: 'Excepturi ratione earum repudiandae facere minus, ipsum dolor sit amet consectetur.',
    link: '/blog/post23'
  },
  {
    id: 'm5tezv',
    image: '/p24.jpeg',
    date: '24 days ago',
    category: 'Culture',
    author: 'Xavier Lopez',
    title: 'How Music Shapes Culture',
    content: 'Ipsam quod inventore, deserunt aspernatur fugit, debitis a aliquam sequi reiciendis.',
    link: '/blog/post24'
  },
  {
    id: 'r62k1y',
    image: '/p25.jpeg',
    date: '25 days ago',
    category: 'Culture',
    author: 'Yara Ibrahim',
    title: 'Cultural Impact of Language',
    content: 'Facere minus, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat ipsam quod.',
    link: '/blog/post25'
  },

  // Coding (5 posts)
  {
    id: 'zpwct4',
    image: '/p26.jpeg',
    date: '26 days ago',
    category: 'Coding',
    author: 'Zachary Scott',
    title: 'Introduction to JavaScript',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum fugiat ipsam quod inventore.',
    link: '/blog/post26'
  },
  {
    id: 'a5syjr',
    image: '/p27.jpeg',
    date: '27 days ago',
    category: 'Coding',
    author: 'Amy Brooks',
    title: 'Building Your First React App',
    content: 'Deserunt aspernatur fugit debitis a aliquam sequi reiciendis excepturi ratione earum.',
    link: '/blog/post27'
  },
  {
    id: 'bqf3wl',
    image: '/p28.jpeg',
    date: '28 days ago',
    category: 'Coding',
    author: 'Brian Clark',
    title: 'Understanding CSS Flexbox',
    content: 'Excepturi ratione earum repudiandae facere minus, ipsum dolor sit amet consectetur.',
    link: '/blog/post28'
  },
  {
    id: 'cp9nue',
    image: '/p29.jpeg',
    date: '29 days ago',
    category: 'Coding',
    author: 'Cynthia Evans',
    title: 'Python for Data Science Basics',
    content: 'Ipsam quod inventore, deserunt aspernatur fugit, debitis a aliquam sequi reiciendis.',
    link: '/blog/post29'
  },
  {
    id: 'djgk25',
    image: '/p30.jpeg',
    date: '30 days ago',
    category: 'Coding',
    author: 'Derek Foster',
    title: 'Debugging Tips for Beginners',
    content: 'Facere minus, ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugiat ipsam quod.',
    link: '/blog/post30'
  }
];

export default posts;
