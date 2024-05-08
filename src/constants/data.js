import images from './images';

const drinks = [
  {
    title: 'White mochaccino',
    price: '$56',
    description: 'Sugar, water, glucose syrup, whole milk, white chocolate',
    imgUrl: images.mocha,
    color: 'rgba( 247, 193, 116, 0.25)'
  },
  {
    title: 'Coffee jelly',
    price: '$59',
    description: 'Sugar, water, glucose syrup, whole milk, white chocolate',
    imgUrl: images.jelly,
    color: 'rgba( 218, 132, 143, 0.25)'
  },
  {
    title: 'Java chip',
    price: '$44',
    description: 'Sugar, water, glucose syrup, whole milk, white chocolate',
    imgUrl: images.java,
    color: 'rgba(  123, 75, 40, 0.25)'
  },
  {
    title: 'Macchiato',
    price: '$31',
    description: 'Sugar, water, glucose syrup, whole milk, white chocolate',
    imgUrl: images.macchio,
    color: 'rgba(  118, 70, 35, 0.25)'
  },
  {
    title: 'Irish coffee',
    price: '$26',
    description: 'Sugar, water, glucose syrup, whole milk, white chocolate',
    imgUrl: images.irish,
    color: 'rgba( 153, 120, 84, 0.25)'
  },
];


const products = [
  {
    imgUrl: images.cup,
    title: 'Kawa cups',
    subtitle: 'Disposable Double Wall Paper Coffee Cups',
    price: '70 ETB'
  },
  {
    imgUrl: images.pack,
    title: 'Kawa packed bean',
    subtitle: 'Light, medium and dark roasted organic coffee',
    price: '250 ETB'
  },
  {
    imgUrl: images.cookie,
    title: 'Kawa cookie',
    subtitle: 'Butter free, egg-less, nut free biscuits and cookies',
    price: '200 ETB'
  },
];

const testmony = [
  {
    imgUrl: images.prof,
    name: 'Miss BITA',
    review: 'I recently visited Kawa shop and had a wonderful experience! The ambiance was cozy and inviting, and the coffee was absolutely delicious. The staff was friendly and provided excellent customer service. I highly recommend this coffee shop to anyone looking for a great cup of coffee in a welcoming atmosphere. I will definitely be returning!',
  },
  {
    imgUrl: images.prof2,
    name: 'Mr Kiru',
    review: 'The cozy seating arrangements and soft jazz music created a relaxed ambiance that was perfect for enjoying my drink and catching up with a friend. Thank you for providing such an outstanding coffee shop experience. I look forward to many more visits and countless cups of delicious coffee in the future.',
  },
  {
    imgUrl: images.prof3,
    name: 'Mrs Lula',
    review: 'I recently had the pleasure of visiting your coffee shop, and I must say, it was an experience that exceeded all my expectations. From the moment I walked through the doors, I was greeted with a warm and welcoming atmosphere. The inviting aroma of freshly brewed coffee filled the air, instantly putting me at ease.',
  },
];

const blogs = [
  {
    imgUrl: images.blog1,
    title: 'COFFEE PASSION',
    content: 'Coffee has the power to bring people together and create meaningful connections. Our hope is that you experience that same sense of joy and community when you visit us. We warmly invite you to grab a cup, find a cozy spot, and savour the ...',
  },
  {
    imgUrl: images.blog2,
    title: 'Ethiopian Coffee Ceremony',
    content: 'One of the most distinct and cherished traditions in Ethiopian coffee culture is the coffee ceremony. A symbol of hospitality and community, the coffee ceremony is a time-honored ritual ...',
  },
  {
    imgUrl: images.blog3,
    title: 'Coffee Painting',
    content: 'Move over, watercolors and oil paints—coffee can also be used as a painting medium. Coffee paintings have gained popularity among artists who seek to add depth and richness to their artwork. The varying shades of brown and the organic ...',
  },
];

export default { drinks, products, testmony, blogs };