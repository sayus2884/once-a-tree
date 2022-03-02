import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import Input from "../../components/Input/Input";
import Card from "../../components/Card/Card";
import CardList from "../../components/CardList/CardList";

const sampleResult = {
  name: "COOPER SWIVEL CHAIR (OPTIONS)",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  price: 1650.0,
};
const QueryResults: NextPage = () => {
  const router = useRouter();
  const { query } = router.query;

  return (
    <div className="page-px pt-5 pb-10">
      <CardList>
        {new Array(5).fill(sampleResult).map((product, i) => (
          <Card {...product} key={i} />
        ))}
      </CardList>
    </div>
  );
};

export default QueryResults;
