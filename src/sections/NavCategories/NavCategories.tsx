import React from "react";

import { categories } from "../../utils/constants";
import UseScrollObserver from "./../../hooks/use-scroll-observer";

interface Props {
  className?: string;
}

const NavCategories: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div
      className={`${className} hidden md:block page-px py-5 border-b border-black/20`}
      {...props}>
      <nav>
        <ul className="flex flex-wrap gap-y-5 gap-x-10">
          {categories.map(({ name, route }, i) => (
            <li key={i} className="first:text-red-500 uppercase tracking-widest hover:opacity-80">
              <a href={`/category/${route}`}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavCategories;
