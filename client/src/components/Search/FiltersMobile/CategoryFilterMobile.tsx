import { Capitalize } from "@/utils/Capitalize";
import { Category } from "@/utils/Types & Interfaces";

type Props = {
  category: string;
  handleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
  categories: Category[];
};

const CategoryFilterMobile = ({
  category,
  categories,
  handleCategory,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 dark:bg-slate-700 dark:text-zinc-200 text-zinc-800 font-madimi">
        Categories
      </h1>
      {categories?.map((cat) => (
        <div
          className="flex items-center ml-2 space-x-2 text-lg"
          key={cat.name + "m"}
        >
          <input
            type="radio"
            id={cat.name + "m"}
            value={cat.name + "m"}
            checked={category === cat.name}
            onChange={handleCategory}
          />
          <label htmlFor={cat.name + "m"}>{Capitalize(cat.name)}</label>
        </div>
      ))}
    </div>
  );
};
export default CategoryFilterMobile;
