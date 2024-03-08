import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IoFilterOutline } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const SearchFiltersMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mb-4 font-inter text-zinc-900 dark:text-zinc-200">
      <div className="border">
        <span
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 py-3 text-lg font-semibold text-center bg-zinc-200 text-zinc-600"
        >
          <IoFilterOutline />
          Click here to filter products
        </span>
      </div>
      <aside
        className={`absolute z-50 top-0 right-0  w-[75vw] h-screen pb-1 bg-white border rounded-l-3xl border-zinc-400 ease-in-out duration-200  overflow-hidden ${
          isOpen ? "translate-x-[0rem] visible" : "translate-x-[50rem] hidden"
        }`}
      >
        <div className="flex justify-between px-6 py-4 text-2xl">
          <h2 className="flex items-center gap-2 font-madimi">
            Filter categories
          </h2>
          <div className="flex items-center">
            <IoMdClose onClick={() => setIsOpen(false)} />
          </div>
        </div>
        <div className="max-h-[90%] overflow-y-scroll">
          <button className="w-full py-3 font-semibold text-white bg-sky-500 font-inter">
            Apply Filters
          </button>
          <section className="flex flex-col gap-1 text-xl">
            <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi">
              Categories
            </h1>
            <span className="flex items-center gap-3 pl-3">Food</span>
            <span className="flex items-center gap-3 pl-3">
              Bowls & Feeders
            </span>
            <span className="flex items-center gap-3 pl-3">Toys</span>
            <span className="flex items-center gap-3 pl-3">Beds</span>
            <span className="flex items-center gap-3 pl-3">Litter</span>
            <span className="flex items-center gap-3 pl-3">Feeders</span>
            <span className="flex items-center gap-3 pl-3">
              Tanks & Aquariums
            </span>
            <span className="flex items-center gap-3 pl-3">
              Filters & Pumps
            </span>
            <span className="flex items-center gap-3 pl-3">Grooming</span>
            <span className="flex items-center gap-3 pl-3">Accessories</span>
          </section>
          <section className="flex flex-col gap-1 text-xl">
            <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi">
              Price range
            </h1>

            <RadioGroup
              defaultValue="option-one"
              className="flex flex-col gap-3"
            >
              <div className="flex items-center pl-3 space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="dogs" className="text-xl">
                  $0.00 - $25.00
                </Label>
              </div>
              <div className="flex items-center pl-3 space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two" className="text-xl">
                  $25.00 - $50.00
                </Label>
              </div>
              <div className="flex items-center pl-3 space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three" className="text-xl">
                  $50.00 - $100.00
                </Label>
              </div>
              <div className="flex items-center pl-3 space-x-2">
                <RadioGroupItem value="option-four" id="option-four" />
                <Label htmlFor="option-four" className="text-xl">
                  $100.00 - $200.00
                </Label>
              </div>
              <div className="flex items-center pl-3 space-x-2">
                <RadioGroupItem value="option-five" id="option-five" />
                <Label htmlFor="option-five" className="text-xl">
                  + $200.00
                </Label>
              </div>
            </RadioGroup>
          </section>
          <section className="flex flex-col gap-1">
            <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 text-zinc-800 font-madimi">
              Price range
            </h1>
            <RadioGroup defaultValue="dogs" className="flex flex-col gap-3">
              <div className="flex items-center pl-3 space-x-2">
                <RadioGroupItem value="dogs" id="dogs" />
                <Label htmlFor="dogs" className="text-xl">
                  Dogs
                </Label>
              </div>
              <div className="flex items-center pl-3 space-x-2">
                <RadioGroupItem value="cats" id="cats" />
                <Label htmlFor="cats" className="text-xl">
                  Cats
                </Label>
              </div>
              <div className="flex items-center pl-3 space-x-2">
                <RadioGroupItem value="fish" id="fish" />
                <Label htmlFor="fish" className="text-xl">
                  Fish
                </Label>
              </div>
              <div className="flex items-center pl-3 space-x-2">
                <RadioGroupItem value="birds" id="birds" />
                <Label htmlFor="birds" className="text-xl">
                  Birds
                </Label>
              </div>
            </RadioGroup>
          </section>
        </div>
      </aside>
    </div>
  );
};
export default SearchFiltersMobile;
