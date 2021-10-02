import Seo from 'components/Seo';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Seo templateTitle='Home' />
      <h1>Index</h1>
    </>
  );
};

export default Home;
