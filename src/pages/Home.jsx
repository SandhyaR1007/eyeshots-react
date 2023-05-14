import { Banner, Navbar, Trending } from "../components";

const Home = () => {
  return (
    <div className="mx-[5%] md:mx-[10%]">
      <Navbar />
      <Banner />
      <Trending />
    </div>
  );
};

export default Home;
