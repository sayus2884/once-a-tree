import React from "react";
import Image from "next/image";
import { Heart, List, User } from "phosphor-react";

import { mainRoutes } from "../../utils/constants";

interface Props {
  className?: string;
}

const Nav: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={`${className} fixed h-nav w-full z-50`} {...props}>
      <div className="flex items-center h-full page-px justify-between border-b border-black/10 bg-white">
        <div className="flex gap-16">
          <Image src="/logo.svg" height={36} width={36} />
          <nav className="hidden lg:grid items-center">
            <ul className="flex gap-16">
              {mainRoutes.map(({ name, route }) => (
                <li>
                  <a className="uppercase font-light tracking-widest" href={route}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex gap-5">
          <div className="flex">
            <Heart size={24} />
            <span>(0)</span>
          </div>
          <User size={24} />
          <div className="lg:hidden">
            <List size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
