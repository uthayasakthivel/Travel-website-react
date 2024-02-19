import images from './images';

const countries = [
  {
    title: 'Thailand',
    price: '$56',
    tags: 'Rich cultural heritage with temples, palaces, and traditions.',
  },
  {
    title: 'Italy',
    price: '$59',
    tags: 'Historical significance with ancient ruins and Renaissance art.',
  },
  {
    title: 'Peru',
    price: '$44',
    tags: 'Diverse geography, including the Andes Mountains and the Amazon Rainforest.',
  },
  {
    title: 'Australia',
    price: '$31',
    tags: 'Unique wildlife, including kangaroos, koalas, and the Great Barrier Reef.',
  },
  {
    title: 'India',
    price: '$26',
    tags: 'Cultural diversity with a rich history and ancient heritage.',
  },
];

const places = [
  {
    title: 'Fiordland National Park',
    price: '$20',
    tags: 'Lush rainforests, waterfalls, and towering peaks.',
  },
  {
    title: "The Matterhorn",
    price: '$16',
    tags: 'Iconic and distinctive pyramid-shaped mountain in the Swiss Alps.',
  },
  {
    title: 'Ha Long Bay',
    price: '$10',
    tags: 'Thousands of towering islands and islets create a surreal seascape.',
  },
  {
    title: 'Sagrada Familia',
    price: '$31',
    tags: 'Iconic basilica known for its intricate and unique design.',
  },
  {
    title: 'Taj Mahal',
    price: '$26',
    tags: 'White marble mausoleum built by Emperor Shah Jahan in memory of his wife.',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: '"Discover Wonders."',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: '"Explore Beyond."',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: '"Adventure Beckons."',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: '"Roam Freely."',
  },
];

export default { countries, places, awards };
