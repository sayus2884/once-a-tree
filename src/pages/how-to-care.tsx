import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { careInstructions } from "../utils/constants";

import UseScrollObserver from "../hooks/use-scroll-observer";

const HowToCare: NextPage = () => {
  const { scrollTo } = UseScrollObserver();

  return (
    <section className="page-px page-py">
      <div className="grid gap-8 max-w-[1000px]">
        <h2 className="title">Make Your Furniture Last Longer</h2>
        <p>
          At Once a Tree, we create unique spaces and understand that your home&apos;s furniture and
          decor are part of your lifestyle and, therefore, should be cared for in a way that expands
          their natural longevity. Whether you&apos;re having a high-end furniture item custom made,
          or buying something from one of our trusted Canadian brands, knowing how to care for each
          piece is the key to an elegant living space.
        </p>
        <p>
          Continue reading on how to take care for the different kinds of materials you will find in
          our catalogue:{" "}
          <a
            className="underline underline-offset-1 cursor:pointer hover:opacity-80"
            onClick={() => scrollTo("wood")}>
            Wood
          </a>
          ,{" "}
          <a
            className="underline underline-offset-1 cursor:pointer hover:opacity-80"
            onClick={() => scrollTo("upholstery")}>
            Upholstery
          </a>
          ,{" "}
          <a
            className="underline underline-offset-1 cursor:pointer hover:opacity-80"
            onClick={() => scrollTo("fabric")}>
            Fabric
          </a>
          , and{" "}
          <a
            className="underline underline-offset-1 cursor:pointer hover:opacity-80"
            onClick={() => scrollTo("leather")}>
            Leather
          </a>
          .
        </p>

        {careInstructions.map(({ type, todos }) => (
          <div className={type}>
            <h3 className="text-2xl font-bold mb-3">{type}</h3>
            <ul className="list-disc ml-5">
              {todos.map((todo) => (
                <li>{todo}</li>
              ))}
            </ul>
          </div>
        ))}

        <p>
          Do you have any questions about the caring of a luxury furniture or décor item?{" "}
          <Link href={"/contact"}>
            <a className="underline underline-offset-1 hover:opacity-80">Contact us</a>
          </Link>{" "}
          and we will be happy to help.
        </p>
      </div>
    </section>
  );
};

export default HowToCare;
