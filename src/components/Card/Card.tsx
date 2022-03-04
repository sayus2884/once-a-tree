import React from "react";
import Image from "next/image";
import { Heart } from "phosphor-react";
import { useRouter } from "next/router";

interface Props {
  className?: string;
  name: string;
  description: string;
  price: string;
  isLiked?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Card: React.FC<Props> = ({ className, onClick, ...props }) => {
  const { name, description, price, isLiked } = props;
  const router = useRouter();

  const handleOnCardClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (onClick) onClick(event);

    // Move to item page
    router.push(`/item/${name}`);
  };

  return (
    <div
      className={`${className} border border-black/20 rounded bg-white shadow`}
      onClick={handleOnCardClick}
      {...props}>
      <div className={`relative h-[350px] w-full cursor-pointer`}>
        <Image src="/images/chair_sample-black.jpg" layout="fill" objectFit="contain" />
      </div>
      <div className="grid gap-5 p-5">
        <h2 className={`font-bold text-2xl cursor-pointer`}>{name}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <p className="font-light text-xl">$ {price}</p>
          <Heart size={30} weight="fill" color="black" />
        </div>
      </div>
    </div>
  );
};

export default Card;
