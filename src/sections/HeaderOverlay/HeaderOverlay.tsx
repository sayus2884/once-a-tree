import React from "react";
import { Background } from "./HeaderOverlay.styles";

interface Props {
  className?: string;
}

const HeaderOverlay: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`${className} relative`} {...props}>
      <div className="absolute bg-black/70 inset-0"></div>
      <div className="grid grid-rows-2 grid-cols-2">
        <Background className="min-h-[250px]" iamgeUrl="/images/bedroom.jpg" />
        <Background className="min-h-[250px]" iamgeUrl="/images/outdoor.jpg" />
        <Background className="min-h-[250px]" iamgeUrl="/images/dog.jpg" />
        <Background className="min-h-[250px]" iamgeUrl="/images/livingroom.jpg" />
      </div>
      <div className="absolute w-full top-0">{children}</div>
    </div>
  );
};

export default HeaderOverlay;
