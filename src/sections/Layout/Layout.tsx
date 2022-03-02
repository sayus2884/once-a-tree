import React from "react";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
interface Props {
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className="font-montserrat text-gray-800" {...props}>
      <Nav />
      <main className="pt-nav min-w-[380px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
