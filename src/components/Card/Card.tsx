import React from "react";
import Image from "next/image";
import { Heart } from "phosphor-react";

interface Props {
  className?: string;
  name: string;
  description: string;
  price: number;
  isLiked?: boolean;
}

const Card: React.FC<Props> = ({ className, ...props }) => {
  const { name, description, price, isLiked } = props;
  return (
    <div className={`${className} border border-black/20 rounded`} {...props}>
      <div className="relative h-[450px] w-full ">
        <Image src="/images/chair_sample-black.jpg" layout="fill" objectFit="contain" />
      </div>
      <div className="grid gap-5 p-5">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <p>$ {price}</p>
          <Heart size={30} />
        </div>
      </div>
    </div>
  );
};

export default Card;
