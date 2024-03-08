type Props = {
  price: string;
  handlePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PriceFilter = ({ price, handlePrice }: Props) => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className="font-medium">Price Range</p>
      <hr className="border-zinc-300" />
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="25"
          value="25"
          checked={price === "25"}
          onChange={handlePrice}
        />
        <label htmlFor="25">Less than $25.00</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="50"
          value="50"
          checked={price === "50"}
          onChange={handlePrice}
        />
        <label htmlFor="50">Less than $50.00</label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="100"
          value="100"
          checked={price === "100"}
          onChange={handlePrice}
        />
        <label htmlFor="100">Less than $100.00</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="199"
          value="199"
          checked={price === "199"}
          onChange={handlePrice}
        />
        <label htmlFor="199">Less than $200.00</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="200"
          value="200"
          checked={price === "200"}
          onChange={handlePrice}
        />
        <label htmlFor="200">+ $200.00</label>
      </div>
    </div>
  );
};
export default PriceFilter;
