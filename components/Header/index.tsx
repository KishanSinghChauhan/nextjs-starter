import 'components/Header/styles.scss';

import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <h1 className='header'>Header</h1>
      <Link href='/'>Home</Link> <Link href='/about'>about</Link>{' '}
      <Link href='/abc'>abc</Link>
    </div>
  );
};

export default Header;
