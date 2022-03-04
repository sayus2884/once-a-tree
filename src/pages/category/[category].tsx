import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import Card from "../../components/Card/Card";
import CardList from "../../components/CardList/CardList";

import { sampleFurniture } from "../../utils/constants";

const Category: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="page-px page-py">
      <div className="pb-8 grid gap-5">
        <h2 className="title place-self-center">{category}</h2>
        <p className="max-w-[600px] place-self-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>

      <CardList>
        {new Array(5).fill(sampleFurniture).map((product, i) => (
          <Card {...product} key={i} />
        ))}
      </CardList>
    </div>
  );
};

export default Category;
