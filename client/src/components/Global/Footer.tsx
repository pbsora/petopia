import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bottom-0 flex justify-around w-full px-4 py-8 text-white bg-blue-700 font-inter">
      <section className="flex-col hidden lg:flex">
        <h1 className="mb-3 text-2xl font-bold">About</h1>
        <div className="flex flex-col gap-1">
          <Link to={"/disclaimer"} className="text-base">
            Disclaimer
          </Link>
          <Link to={"/"} className="text-base">
            About this project
          </Link>
        </div>
      </section>
      <section className="flex items-center gap-8 text-[2.5rem]">
        <a href="https://github.com/pbsora" target="_blank">
          <FaGithub className="duration-200 cursor-pointer hover:scale-110" />
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-bispo-a41a22290/"
          target="_blank"
        >
          <FaLinkedin className="duration-200 cursor-pointer hover:scale-110" />
        </a>
      </section>
    </footer>
  );
};
export default Footer;
