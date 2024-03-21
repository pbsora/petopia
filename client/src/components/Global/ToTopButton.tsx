import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ToTopButton = () => {
  const location = useLocation();
  const excludePaths = ["/cart", "/checkout"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className={`${
          excludePaths.includes(location.pathname) && "hidden"
        } fixed p-4 text-2xl text-white rounded-full bg-sky-500 bottom-6 right-6`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ToTopButton;
