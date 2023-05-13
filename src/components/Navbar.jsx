import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import defaultUser from "@/assets/defaultUser.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row p-4 max-w-screen mb-3">
      <div className="flex justify-between w-full items-center">
        <section className="relative flex">
          <img
            className="rounded-full border-2  bg-yellow-300 me-3 hover:bg-yellow-500 cursor-pointer"
            src={defaultUser}
            alt="userProfileImage"
            width={40}
          />

          <span className="font-monoton text-3xl hover:text-red-600 cursor-pointer">
            eyesome
          </span>
        </section>

        <section className="hidden  sm:flex items-center md:w-1/4 sm:w-1/3 bg-[#E7E1D1] px-3 rounded-full text-sm">
          <input
            className="w-full py-2 px-3 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search Glasses"
          />
          <CiSearch />
        </section>

        <ul className=" hidden md:flex justify-between text-2xl ">
          <li className="bg-gray-200 p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer mx-2">
            <BsBookmarkHeart />
          </li>
          <li className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer mx-2">
            <HiOutlineShoppingBag />
          </li>
        </ul>
        <section className="md:hidden cursor-pointer ">
          <RxHamburgerMenu className="text-lg" />
        </section>
      </div>
      <section className="sm:hidden  flex items-center  mt-4 bg-[#E7E1D1] px-3 rounded-full text-sm">
        <input
          className="w-full py-2 px-3 bg-transparent focus:outline-none"
          type="text"
          placeholder="Search Glasses"
        />
        <CiSearch />
      </section>
    </nav>
  );
};

export default Navbar;
