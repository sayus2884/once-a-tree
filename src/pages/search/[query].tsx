import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import Card from "../../components/Card/Card";
import CardList from "../../components/CardList/CardList";

import { sampleFurniture } from "../../utils/constants";

const QueryResults: NextPage = () => {
  const router = useRouter();
  const { query } = router.query;

  return (
    <div className="page-px page-py">
      <CardList>
        {new Array(5).fill(sampleFurniture).map((product, i) => (
          <Card {...product} key={i} />
        ))}
      </CardList>
    </div>
  );
};

export default QueryResults;
