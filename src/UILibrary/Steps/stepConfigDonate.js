const matchImage = `https://images.pexels.com/photos/39244/match-fire-close-burn-39244.jpeg?cs=srgb&dl=close-up-fire-flame-39244.jpg&fm=jpg`;
const mailImage = `https://images.pexels.com/photos/211290/pexels-photo-211290.jpeg?cs=srgb&dl=blur-card-cardboard-211290.jpg&fm=jpg`;
const laptopImage = `https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?cs=srgb&dl=beautiful-connection-education-1181233.jpg&fm=jpg`;
const stockImage = `https://images.pexels.com/photos/1073765/pexels-photo-1073765.jpeg?cs=srgb&dl=data-electronics-exchange-1073765.jpg&fm=jpg`;
import PaypalDonateButton from '../../pages/Donate/PaypalDonateButton';
import paypalPartnershipImage from './paypalPartnershipImage.png';
import donationStockImage from './donationStockImage.png';

export default [
  {
    name: "Online Donation",
    title: 'Donate Through Paypal',
    text: `Companies sometime match donations. Lorem ipsum palce malgnau talbot
    abstropf kfnsal llaismre melai basicl oufen besslevon musslebeech valar morgohulis`,
    image: paypalPartnershipImage,
    link: {
      url: ``,
      component: PaypalDonateButton,
      text: `Donate`,
    },
  },
  {
    name: "Alternative Donations",
    title: 'Mail a Donation via Check',
    text: `Send us a donation to Boston. Resilient Coders. 50 Milk Street, 16th floor. Boston MA, 02109. Stock stuff too Even more blah blah blah with mailing information and coalition and stocks as donations`,
    image: donationStockImage,
    link: null,
  },
  {
    name: "Involve Your Company",
    title: 'Machines for our Learners',
    text: `To involve your company, you can  match donations ... high -end macbooks of this century...Are you or your company considering a hardware upgrade this year? Consider donating your outgoing computers. Play a critical role in launching the careers of talented developers. Click below to see if your company matches donations`,
    image: laptopImage,
    link: `https://www.matchinggifts.com/unh/`,
  },
  // {
  //   name: "Donate Stocks",
  //   title: `Consider Donating Equity`,
  //   text: `Stocks we accept those. Lorem ipsum palce malgnau talbot
  //   abstropf kfnsal llaismre melai basicl oufen besslevon musslebeech valar morgohulis`,
  //   image: stockImage,
  //   link: '/donate',
  // },
]
