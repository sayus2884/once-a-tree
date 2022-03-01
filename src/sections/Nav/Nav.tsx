import React from "react";
import Image from "next/image";
import { List } from "phosphor-react";

interface Props {
  className?: string;
}

const Nav: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={`${className} fixed bg-red-500 h-nav w-full px-[10px]`} {...props}>
      <div className="flex items-center h-full justify-between">
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
