import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import Input from "../../components/Input/Input";
import Card from "../../components/Card/Card";

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
    <div className="px-[10px] pt-5 pb-10">
      <div className="pb-8">
        <Input defaultValue={query} />
        <p className="mt-2">277 results for {query}</p>
      </div>

      <div className="grid gap-5">
        {new Array(5).fill(0).map((data, i) => (
          <Card {...sampleResult} key={i} />
        ))}
      </div>
    </div>
  );
};

export default QueryResults;
