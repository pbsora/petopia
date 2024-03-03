import BirdsDropdown from "./CategoryDropdown/BirdsDropdown";
import CatsDropdown from "./CategoryDropdown/CatsDropdown";
import DogsDropdown from "./CategoryDropdown/DogsDropdown";
import FishDropdown from "./CategoryDropdown/FishDropdown";

const CategoryDropdown = () => {
  return (
    <div className="flex">
      <DogsDropdown />
      <CatsDropdown />
      <FishDropdown />
      <BirdsDropdown />
    </div>
  );
};
export default CategoryDropdown;
