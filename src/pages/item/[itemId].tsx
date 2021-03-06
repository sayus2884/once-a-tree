import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowsOut, Envelope, Heart } from "phosphor-react";
import React from "react";
import Button from "../../components/Button/Button";

import { sampleFurniture } from "../../utils/constants";

const Item: NextPage = () => {
  // Use router to fetch product api
  //   const router = useRouter();
  //   const { itemId } = router.query;
  const { name, price } = sampleFurniture;

  return (
    <section className="page-px page-py">
      <div className="grid lg:gap-x-24 lg:grid-cols-2">
        <div className="grid gap-10">
          <h2 className="title lg:hidden">{name}</h2>
          <div className="relative w-full min-h-[450px]">
            <Image src="/images/chair_sample-black.jpg" layout="fill" objectFit="contain" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {sampleFurniture.options.map((option, i) => (
              <button
                className="relative h-[150px] md:max-w-[150px] border border-black/20 shadow hover:shadow-md rounded-sm"
                key={i}>
                <Image
                  className="hover:opacity-50"
                  src={option.imageUrl}
                  layout="fill"
                  objectFit="contain"
                />
              </button>
            ))}
          </div>
          <div className="grid gap-2 text-sm">
            <button className="hidden md:flex gap-1 items-center">
              <ArrowsOut size={20} weight="light" /> View full image
            </button>
            <a className="flex gap-1 items-center" href="mailto:sample@example.com items-center">
              <Envelope size={20} weight="light" /> Email us about this product
            </a>
          </div>
        </div>

        <div className="grid gap-10">
          <h2 className="title hidden lg:block">{name}</h2>

          <div className="grid gap-5">
            <div className="flex justify-between items-center">
              <p className="text-3xl tracking-wide">$ {price}</p>
              <div className="flex gap-2 items-center">
                <Heart size={32} />
                <span>Add to wishlist</span>
              </div>
            </div>
            <div>Add drop down here</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="grid gap-4 list-disc list-outside ml-5">
              {sampleFurniture.details.map((detail, i) => (
                <li key={i}>
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 lg:gap-5">
            {sampleFurniture.options.map(({ name, priceUrl }, i) => (
              <Button solid key={i}>
                <a href={priceUrl} className="text-xs">
                  {name} Pricing
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
