import type { NextPage } from "next";
import Image from "next/image";
import HeaderOverlay from "../sections/HeaderOverlay/HeaderOverlay";
import Input from "./../components/Input/Input";
import Searchbar from "./../components/Searchbar/Searchbar";

const Home: NextPage = () => {
  return (
    <div>
      <HeaderOverlay className="text-white h-screen">
        <div className="flex flex-col h-[500px] md:h-screen items-center justify-center page-px gap-8">
          <div className="flex flex-col w-full lg:max-w-[600px]">
            <p className="font-light">Search your furniture</p>
            <Searchbar className="" />
          </div>
        </div>
      </HeaderOverlay>
    </div>
  );
};

export default Home;
