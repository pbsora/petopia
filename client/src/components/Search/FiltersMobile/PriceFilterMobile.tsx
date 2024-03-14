type Props = {
  price: string;
  handlePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PriceFilterMobile = ({ price, handlePrice }: Props) => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <h1 className="flex items-center w-full gap-2 p-2 text-2xl bg-zinc-200 dark:bg-slate-700 dark:text-zinc-200 text-zinc-800 font-madimi">
        Price range
      </h1>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="25m"
          value="25"
          checked={price === "25"}
          onChange={handlePrice}
        />
        <label htmlFor="25m">Less than $25.00</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="50m"
          value="50"
          checked={price === "50"}
          onChange={handlePrice}
        />
        <label htmlFor="50m">Less than $50.00</label>
      </div>

      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="100m"
          value="100"
          checked={price === "100"}
          onChange={handlePrice}
        />
        <label htmlFor="100m">Less than $100.00</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="199m"
          value="199"
          checked={price === "199"}
          onChange={handlePrice}
        />
        <label htmlFor="199m">Less than $200.00</label>
      </div>
      <div className="flex items-center ml-2 space-x-2 text-lg">
        <input
          type="radio"
          id="200m"
          value="200"
          checked={price === "200"}
          onChange={handlePrice}
        />
        <label htmlFor="200m">+ $200.00</label>
      </div>
    </div>
  );
};
export default PriceFilterMobile;
