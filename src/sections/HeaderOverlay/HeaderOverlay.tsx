import React from "react";
import { Background } from "./HeaderOverlay.styles";

interface Props {
  className?: string;
}

const HeaderOverlay: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`${className} relative`} {...props}>
      <div className="absolute bg-black/70 inset-0"></div>
      <Background className="h-screen w-full" imageUrl="/images/room.jpg" />
      <div className="absolute w-full top-0">{children}</div>
    </div>
  );
};

export default HeaderOverlay;
