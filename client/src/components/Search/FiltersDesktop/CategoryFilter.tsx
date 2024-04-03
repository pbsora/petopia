import { Capitalize } from "@/utils/Capitalize";
import { Category } from "@/utils/Types & Interfaces";

type Props = {
  category: string;
  handleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;

  categories: Category[];
};

const CategoryFilter = ({ category, categories, handleCategory }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium">Categories</p>
      <hr className="border-zinc-300" />
      {categories?.map((cat) => (
        <div className="flex items-center space-x-2" key={cat.categoryId}>
          <input
            type="radio"
            id={cat.name}
            value={cat.name}
            checked={category === cat.name}
            onChange={handleCategory}
          />
          <label htmlFor={cat.name}>{Capitalize(cat.name)}</label>
        </div>
      ))}
    </div>
  );
};
export default CategoryFilter;
