import React from "react";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
interface Props {
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div {...props}>
      <Nav />
      <main className="pt-nav px-[10px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
