import { NextPage } from 'next';
import React from 'react';

const Custom404 = () => {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default Custom404;

Custom404.getLayout = (page: NextPage) => {
  return <>{page}</>;
};
