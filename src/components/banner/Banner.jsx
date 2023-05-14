import { BsArrowDownRightCircle } from "react-icons/bs";

import bannerImg from "@/assets/bannerImg.png";

const Banner = () => {
  return (
    <main className=" flex justify-between items-center py-4 my-5 font-josephin relative">
      <section className="max-w-xl mx-auto sm:mx-0  w-full p-3  lg:w-1/3">
        <h1 className="text-8xl  md:text-7xl lg:text-8xl font-semibold  py-3 w-full ">
          Glasses & Lens
        </h1>
        <p className="py-3 text-md  text-gray-600">
          Buy the best high-quality sunglasses from us.
          <br />
          More than 100 types of assortment.
        </p>
        <section className="flex items-center">
          <button className="btn-primary">Start Shopping</button>
          <button className="p-3 flex items-center">
            <span className="mx-2">Explore More</span>{" "}
            <BsArrowDownRightCircle className="text-lg" />
          </button>
        </section>
      </section>
      <section className="hidden lg:block w-1/2">
        <img src={bannerImg} alt="bannerImg" className="w-full h-full" />
      </section>
    </main>
  );
};

export default Banner;
