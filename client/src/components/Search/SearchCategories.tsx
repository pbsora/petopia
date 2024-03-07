import { FaRegTrashAlt } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SearchCategories = () => {
  return (
    <div className="w-3/4 h-48 mb-4 font-inter text-zinc-900 dark:text-zinc-200">
      <aside className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 ">
          <p className="font-medium">Filter Products</p>
          <hr className="border-zinc-300" />
          <span className="flex items-center gap-3 text-sm">
            Remove filters <FaRegTrashAlt />
          </span>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="font-medium">Categories</p>
          <hr className="border-zinc-300" />
          <span className="flex items-center gap-3 text-sm">Food</span>
          <span className="flex items-center gap-3 text-sm">
            Bowls & Feeders
          </span>
          <span className="flex items-center gap-3 text-sm">Toys</span>
          <span className="flex items-center gap-3 text-sm">Beds</span>
          <span className="flex items-center gap-3 text-sm">Litter</span>
          <span className="flex items-center gap-3 text-sm">Feeders</span>
          <span className="flex items-center gap-3 text-sm">
            Tanks & Aquariums
          </span>
          <span className="flex items-center gap-3 text-sm">
            Filters & Pumps
          </span>
          <span className="flex items-center gap-3 text-sm">Grooming</span>
          <span className="flex items-center gap-3 text-sm">Accessories</span>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="font-medium">Price Range</p>
          <hr className="border-zinc-300" />
          <RadioGroup defaultValue="option-one" className="flex flex-col gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="dogs">$0.00 - $25.00</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">$25.00 - $50.00</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">$50.00 - $100.00</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-four" id="option-four" />
              <Label htmlFor="option-four">$100.00 - $200.00</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-five" id="option-five" />
              <Label htmlFor="option-five">+ $200.00</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="font-medium">Pet</p>
          <hr className="border-zinc-300" />
          <RadioGroup defaultValue="dogs" className="flex flex-col gap-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dogs" id="dogs" />
              <Label htmlFor="dogs">Dogs</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cats" id="cats" />
              <Label htmlFor="cats">Cats</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fish" id="fish" />
              <Label htmlFor="fish">Fish</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="birds" id="birds" />
              <Label htmlFor="birds">Birds</Label>
            </div>
          </RadioGroup>
        </div>
      </aside>
    </div>
  );
};
export default SearchCategories;
