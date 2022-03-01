import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowsOut, Envelope, Heart } from "phosphor-react";
import React from "react";
import Button from "../../components/Button/Button";

import { sampleFurniture } from "../../utils/constants";

const Item: NextPage = () => {
  const router = useRouter();
  const { itemId } = router.query;

  return (
    <section className="px-[10px] pt-5 pb-10">
      <div className="grid gap-5">
        <h2>Item id {itemId} information here.</h2>
        <div className="relative w-full min-h-[450px]">
          <Image src="/images/chair_sample-black.jpg" layout="fill" objectFit="contain" />
        </div>
        <div className="text-red-500">add swiper here</div>

        <div className="grid gap-2">
          <button className="flex gap-1 items-center">
            <ArrowsOut size={20} weight="light" /> View full image
          </button>
          <a className="flex gap-1" href="mailto:sample@example.com items-center">
            <Envelope size={20} weight="light" /> Email us about this product
          </a>
        </div>

        <div className="grid gap-5">
          <div className="flex justify-between items-center">
            <p>$ 1,650.00</p>
            <Heart size={32} />
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

        <div className="grid gap-3">
          {sampleFurniture.options.map(({ name, priceUrl }, i) => (
            <Button solid key={i}>
              <a href={priceUrl}>{name}</a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Item;