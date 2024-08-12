import type { NextPage } from "next";
import TopHeader from "./_components/top-header/TopHeader";
import Trending from "./_components/trending/Trending";
import CMCTable from "./_components/cmc-table/CMCTable";

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
