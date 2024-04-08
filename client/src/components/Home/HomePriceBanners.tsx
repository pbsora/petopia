import { Link } from "react-router-dom";

const HomePriceBanners = () => {
  return (
    <div className="md:w-[80vw] m-auto mb-10">
      <h1 className="gap-6 pl-6 mb-4 text-xl font-bold lg:pl-8 font-inter text-zinc-800 dark:text-zinc-200">
        By price
      </h1>
      <div className="flex flex-col items-center justify-between gap-3 m-auto border-black lg:flex-row">
        <div className="flex items-center justify-around w-full">
          <Link
            to={"/search?price=25&criteria=lt"}
            className="w-[40%] lg:w-[40%] hover:cursor-pointer shadow-md"
          >
            <img
              src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1712600566/petshop/banners/d9pvym0z2zjwyzwlrpwb.jpg"
              alt="under 25 dollars banner"
              className="duration-200 rounded-xl hover:scale-110"
            />
          </Link>
          <Link
            to={"/search?price=50&criteria=lt"}
            className="w-[40%] lg:w-[40%] hover:cursor-pointer shadow-md"
          >
            <img
              src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1712600567/petshop/banners/ldxvdrxhsqufp04uunjz.jpg"
              alt="under 50 dollars banner"
              className="duration-200 rounded-xl hover:scale-110"
            />
          </Link>
        </div>
        <div className="flex items-center justify-around w-full">
          <Link
            to={"/search?price=100&criteria=lt"}
            className="w-[40%] lg:w-[40%] hover:cursor-pointer shadow-md"
          >
            <img
              src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1712597435/petshop/banners/qpaygz7gtqdtlx9tbyh4.jpg"
              alt="under 100 dollars banner"
              className="duration-200 rounded-xl hover:scale-110"
            />
          </Link>
          <Link
            to={"/search?price=200&criteria=lt"}
            className="w-[40%] lg:w-[40%] hover:cursor-pointer shadow-md"
          >
            <img
              src="https://res.cloudinary.com/dhkaqwnyz/image/upload/v1712600566/petshop/banners/tpyavb1bgphyeipbnxyb.jpg"
              alt="under 200 dollars banner"
              className="duration-200 rounded-xl hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePriceBanners;
