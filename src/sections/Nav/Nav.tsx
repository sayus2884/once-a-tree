import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, List, User } from "phosphor-react";

import { mainRoutes } from "../../utils/constants";

import NavCategories from "../NavCategories/NavCategories";
import useScrollObserver from "../../hooks/use-scroll-observer";
import { useRouter } from "next/router";

interface Props {
  className?: string;
}

const animatableRoutes = ["/"];

const Nav: React.FC<Props> = ({ className, ...props }) => {
  const { isInPosition } = useScrollObserver(150);
  const router = useRouter();
  const { asPath } = router;

  console.log(asPath);

  const animateOnRoute = (route: string) => {
    if (animatableRoutes.includes(route)) {
      return `text-white ${!isInPosition ? "bg-white text-black" : "font-bold"}`;
    }

    return "bg-white";
  };

  return (
    <div className={`${className}  fixed w-full z-50`} {...props}>
      <div
        className={`flex items-center h-nav page-px justify-between border-b border-black/10 ${animateOnRoute(
          asPath,
        )} transition ease-in duration-200`}>
        <div className="flex gap-16">
          <Link href="/">
            <div className="relative h-[36px] w-[36px] cursor-pointer">
              <Image src="/logo.svg" layout="fill" />
            </div>
          </Link>
          <nav className="hidden lg:grid items-center">
            <ul className="flex gap-16">
              {mainRoutes.map(({ name, route }, i) => (
                <li key={i}>
                  <a className="uppercase tracking-widest hover:opacity-70" href={route}>
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
      <NavCategories className={`${animateOnRoute(asPath)} transition ease-in duration-200`} />
    </div>
  );
};

export default Nav;
