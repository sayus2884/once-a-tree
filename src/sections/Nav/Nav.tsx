import React from "react";
import Image from "next/image";
import { List } from "phosphor-react";

interface Props {
  className?: string;
}

const Nav: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={`${className} fixed h-nav w-full z-50`} {...props}>
      <div className="flex items-center h-full px-[10px] justify-between border-b border-black/10 bg-white">
        <div>
          <Image src="/logo.svg" height={36} width={36} />
        </div>
        <div className="md-hidden">
          <List size={24} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
