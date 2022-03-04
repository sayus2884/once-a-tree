import React from "react";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Searchbar from "../../components/Searchbar/Searchbar";
import NavCategories from "../NavCategories/NavCategories";

interface Props {
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className="font-montserrat text-gray-800" {...props}>
      <Nav />

      <main className="min-w-[380px]">
        <div>{children}</div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
