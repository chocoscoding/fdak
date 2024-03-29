import Banner from "../components/Banner";
import Client from "./Client";

const Home = () => (
  <div className="flex justify-center sm:px-4 p-12 !pt-[100px]">
    <div className="w-full minmd:w-4/5">
      <Banner
        name={(<>Discover, collect, and sell <br /> extraordinary NFTs</>)}
        childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
        parentStyle="justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
      />
      <Client />
    </div>
  </div>
);

export default Home;

