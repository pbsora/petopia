import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-around w-full px-4 py-16 text-white bg-blue-700 font-inter">
      <section className="flex-col hidden lg:flex">
        <h1 className="mb-3 text-2xl font-bold">About</h1>
        <div className="flex flex-col gap-2">
          <Link to={"/"} className="text-xl">
            Disclaimer
          </Link>
          <Link to={"/"} className="text-xl">
            About this project
          </Link>
          <Link to={"/"} className="text-xl">
            Get in contact with me.
          </Link>
          <Link to={"/dog"} className="text-xl">
            Download copy of my Resume
          </Link>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <div className="flex gap-6 ml-5">
          <Github size={40} />
          <Linkedin size={40} />
        </div>
      </section>
    </footer>
  );
};
export default Footer;
