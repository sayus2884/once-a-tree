import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Input from "./../components/Input/Input";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col h-[500px] md:h-screen bg-red-600 items-center justify-center">
        <Input className="rounded-md" label="Search" />
      </div>
    </>
  );
};

export default Home;
