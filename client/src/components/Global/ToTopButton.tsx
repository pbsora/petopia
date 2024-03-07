import { FaArrowUp } from "react-icons/fa";

const ToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className="fixed p-4 text-2xl text-white rounded-full bg-sky-500 bottom-6 right-6"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ToTopButton;
