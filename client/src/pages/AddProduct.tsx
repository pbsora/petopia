import { useAddProduct } from "@/lib/Queries/ProductQueries";
import { useGetCategories, useGetPets } from "@/lib/Queries/SearchQueries";
import { Capitalize } from "@/utils/Capitalize";
import { NewProduct } from "@/utils/Types & Interfaces";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const AddProduct = () => {
  const categories = useGetCategories().data as {
    categoryId: number;
    name: string;
  }[];
  const pets = useGetPets().data as { petTypeId: number; name: string }[];

  const [product, setProduct] = useState<NewProduct>({
    name: "",
    stock: 1,
    price: 1,
    image: "",
    description: "",
    categoryId: 1,
    petId: 1,
  });

  console.log(product);

  const newProductMutation = useAddProduct();

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [event.target.name]: event.target.value,
    }));
  };

  const handleNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    newProductMutation.mutate(product);
  };

  useEffect(() => {
    if (newProductMutation.isSuccess) {
      window.location.reload();
    }
    if (newProductMutation.isError) {
      console.log(newProductMutation.failureReason);
    }
  }, [newProductMutation.isSuccess, newProductMutation.isError]);

  return (
    <form
      className="container flex flex-col w-[65%] gap-4 mt-6 mb-10 h-fit font-inter"
      onSubmit={handleNewProduct}
    >
      <div>
        <label htmlFor="name" className="block mb-2 text-lg">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full px-4 py-2 border rounded-lg border-zinc-500 dark:bg-slate-800"
          onChange={handleSelectChange}
          value={product.name}
        />
      </div>
      <div>
        <label htmlFor="stock" className="block mb-2 text-lg">
          In stock
        </label>
        <input
          type="number"
          name="stock"
          id="stock"
          className="w-full px-4 py-2 border rounded-lg border-zinc-500 dark:bg-slate-800"
          onChange={handleSelectChange}
          value={product.stock}
        />
      </div>
      <div>
        <label htmlFor="price" className="block mb-2 text-lg">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          className="w-full px-4 py-2 border rounded-lg border-zinc-500 dark:bg-slate-800"
          onChange={handleSelectChange}
          value={product.price}
        />
      </div>
      <div>
        <label htmlFor="image" className="block mb-2 text-lg">
          Image
        </label>
        <input
          type="text"
          name="image"
          id="image"
          className="w-full px-4 py-2 border rounded-lg border-zinc-500 dark:bg-slate-800"
          onChange={handleSelectChange}
          value={product.image}
        />
      </div>
      <div>
        <label htmlFor="description" className="block mb-2 text-lg">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="image"
          className="w-full px-4 py-2 border rounded-lg border-zinc-500 dark:bg-slate-800"
          onChange={handleSelectChange}
          value={product.description}
        />
      </div>
      <div>
        <label htmlFor="category" className="block mb-2 text-lg">
          Category
        </label>
        <select
          name="categoryId"
          id="category"
          className="w-full px-3 py-3 text-lg border rounded-md border-zinc-500 dark:bg-slate-800"
          onChange={handleSelectChange}
          value={product.categoryId}
        >
          {categories?.map((category) => (
            <option
              key={category.categoryId}
              value={category.categoryId}
              className=""
            >
              {Capitalize(category.name)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="pet" className="block mb-2 text-lg">
          Pet
        </label>
        <select
          name="petId"
          id="pet"
          className="w-full px-3 py-3 text-lg border rounded-md border-zinc-500 dark:bg-slate-800"
          onChange={handleSelectChange}
          value={product.petId}
        >
          {pets?.map((pet) => (
            <option key={pet.petTypeId} value={pet.petTypeId} className="">
              {pet.name}
            </option>
          ))}
        </select>
      </div>
      <button className="w-full py-3 mt-8 text-xl text-white bg-sky-600 rounded-xl">
        {newProductMutation.isPending ? (
          <div className="flex items-center justify-center py-3">
            <PropagateLoader color="#15bde1" size={25} />
          </div>
        ) : (
          "Add product"
        )}
      </button>
    </form>
  );
};
export default AddProduct;
