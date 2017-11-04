import coworkingImage from './coworkingImage.png';
import bootcampImage from './bootcampImage.jpg';
import labImage from './labImage.png';

export default [
  {
    name: "Community",
    title: 'Community',
    text: `Community is our open-door drop-in program. Current Bootcampers use this time as a study hall, supported
    by staff and volunteers. Aspiring Bootcampers stop by to learn more before applying. Alumni who are in the workforce
    use this time to improve skills relevant to their jobs. We are also joined by younger coders, who are still in
    high school and want to explore development in a safe, supportive, positive space.`,
    image: coworkingImage,
    link: '/get-involved/student',
  },
  {
    name: "Bootcamp",
    title: 'Resilient Bootcamp',
    text: `For 16 weeks, daily, a select cohort of early-career individuals meet to receive
      direct instruction from tech professionals on UI Development skills. By the end of
      their time with us, they have solid proficiency in semantically structured HTML, well-crafted
      and responsive CSS, JavaScript fundamentals, jQuery, and Git. To graduate, every student needs
      to build a game or application, from scratch, in JavaScript.`,
    image: bootcampImage,
    link: '/bootcamp',
  },
  {
    name: "Lab",
    title: 'Resilient Lab',
    text: `We run a web development agency that provides meaningful employment opportunities for
      our Technical Fellows. We've designed and built websites and applications for organizations as small as local community groups,
      and as big as New York University. During their apprenticeship with us at Resilient
      Lab, Fellows continue learning JavaScript, explore additional skills and frameworks
      as identified by hiring partners, including Angular and React.`,
    image: labImage,
    link: '/lab',
  },
]
