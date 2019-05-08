import bootcampImage from './bootcampImage.jpg';
import labImage from './labImage.png';

const laptopImage = `https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?cs=srgb&dl=beautiful-connection-education-1181233.jpg&fm=jpg`;
const stockImage = `https://images.pexels.com/photos/1073765/pexels-photo-1073765.jpeg?cs=srgb&dl=data-electronics-exchange-1073765.jpg&fm=jpg`;

export default [
  {
    name: "Match Donation",
    title: 'Match Donation',
    text: `Community is our open-door drop-in program. Current Bootcampers use this time as a study hall, supported
    by staff and volunteers. Aspiring Bootcampers stop by to learn more before applying. Alumni who are in the workforce
    use this time to improve skills relevant to their jobs. We are also joined by younger coders, who are still in
    high school and want to explore development in a safe, supportive, positive space.`,
    image: bootcampImage,
    link: '#',
  },
  {
    name: "Mail Donation",
    title: 'Mail a Donation via Check',
    text: `Community is our open-door drop-in program. Current Bootcampers use this time as a study hall, supported
    by staff and volunteers. Aspiring Bootcampers stop by to learn more before applying. Alumni who are in the workforce
    use this time to improve skills relevant to their jobs. We are also joined by younger coders, who are still in
    high school and want to explore development in a safe, supportive, positive space.`,
    image: labImage,
    link: '#',
  },
  {
    name: "Gift Laptops",
    title: 'Machines for our Learners',
    text: `Are you or your company considering a hardware upgrade this year? Consider donating your outgoing computers. Play a critical role in launching the careers of talented developers. `,
    image: laptopImage,
    link: '#',
  },
  {
    name: "Donate Stocks",
    title: 'Consider Donating Equity',
    text: `Stocks we accept those`,
    image: stockImage,
    link: '/donate',
  },
]
