import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import Card from "../../components/Card/Card";

const sampleResult = {
  name: "COOPER SWIVEL CHAIR (OPTIONS)",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  price: 1650.0,
};

const Category: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="page-px pt-5 pb-10">
      <div className="pb-8 grid gap-5">
        <h2 className="place-self-center">{category}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid gap-5">
        {new Array(5).fill(sampleResult).map((product, i) => (
          <Card {...product} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Category;
