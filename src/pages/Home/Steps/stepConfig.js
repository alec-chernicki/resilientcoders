import coworkingImage from './coworkingImage.png';
import bootcampImage from './bootcampImage.jpg';
import labImage from './labImage.png';

export default [
  {
    name: "Community",
    title: 'Community',
    text: `Community presents our students with an opportunity to hang out in a safe space
      together, meet other young coders, and interact with tech professionals as they further
      explore web development at their pace.`,
    image: coworkingImage,
    link: '/get-involved/student',
  },
  {
    name: "Bootcamp",
    title: 'Resilient Bootcamp',
    text: `For seven weeks, daily, a select cohort of early-career individuals meet to receive
      direct instruction from tech professionals on front-end development skills. By the end of
      their time with us, they have solid proficiency in semantically structured HTML, well-crafted
      and responsive CSS, JavaScript fundamentals, jQuery, and Git. They have an appreciation for
      progressive enhancement, accessibility, and usability. At the end, we recruit out of our
      Bootcamp into Resilient Lab.`,
    image: bootcampImage,
    link: '/bootcamp',
  },
  {
    name: "Lab",
    title: 'Resilient Lab',
    text: `We run a web development agency that provides meaningful employment opportunities for
      our highest-performing youth. We've designed and built websites for local startups, non
      profits, schools, and small businesses. During their apprenticeship with us at Resilient
      Lab, youth coders continue learning JavaScript, explore additional skills and frameworks
      as identified by hiring partners, and visit local tech companies.`,
    image: labImage,
    link: '/lab',
  },
]
