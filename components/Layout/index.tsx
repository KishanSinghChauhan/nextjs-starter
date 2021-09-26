import React, { FC, ReactNode } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
