// import Footer from 'components/Footer';
import Seo from 'components/Seo';

import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <>
      <Seo templateTitle='About' />
      <h1>About</h1>
    </>
  );
};

export default About;

// About.getLayout = (page: NextPage) => {
//   return (
//     <>
//       {page}
//       <Footer />
//     </>
//   );
// };
