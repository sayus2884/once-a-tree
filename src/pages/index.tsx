import type { NextPage } from "next";
import Image from "next/image";
import HeaderOverlay from "../sections/HeaderOverlay/HeaderOverlay";
import Input from "./../components/Input/Input";

const Home: NextPage = () => {
  return (
    <div className="bg-red-600">
      <HeaderOverlay className="text-white">
        <div className="flex flex-col h-[500px] md:h-screen items-center justify-center px-[10px]">
          <div className="relative h-[50px] w-[50px]">
            <Image src="/logo.svg" layout="fill" />
          </div>
          <Input className="rounded-md" label="Search" />
        </div>
      </HeaderOverlay>
    </div>
  );
};

export default Home;
