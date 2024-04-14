import type { NextPage } from "next";
import TopHeader from "@/app/coins/_components/top-header/TopHeader";
import Trending from "@/app/coins/_components/trending/Trending";
import CMCTable from "@/app/coins/_components/cmc-table/CMCTable";

const Home: NextPage = () => {
  return (
    <>
      <TopHeader />
      <Trending />
      <CMCTable />
    </>
  );
};

export default Home;
