import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import ArticleFeed from "../../components/ArticleFeed/ArticleFeed";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date = new Date();

const Feed: NextPage = () => {
  return (
    <div className="page-px page-py">
      <div className="grid lg:grid-cols-4 gap-20">
        <div className="lg:col-span-3 grid gap-16">
          <ArticleFeed />
          <ArticleFeed />
        </div>

        <div>
          <h2 className="font-bold mb-3">Recent Articles</h2>
          <ul>
            <li>
              <article>
                <h3 className="text-xl">This is a good title</h3>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feed;
