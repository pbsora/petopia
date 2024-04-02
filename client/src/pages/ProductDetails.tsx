import { AuthContext, OrderItem, Product } from "@/utils/Types & Interfaces";
import { useLoaderData, useLocation } from "react-router-dom";
import { Heart, Plus, Minus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Capitalize } from "@/utils/Capitalize";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useToast } from "@/components/ui/use-toast";
import { useNewFavorite } from "@/lib/Queries/FavoriteQueries";
import { UserContext } from "@/hooks/Context/UserContext";
import RecommendedProducts from "@/components/Product/RecommendedProducts";

const ProductDetails = () => {
  const location = useLocation();
  const { toast } = useToast();

  const product = useLoaderData() as Product;
  const [cart, setCart] = useLocalStorage("cart", []);
  const [quantity, setQuantity] = useState(1);

  const { user } = useContext(UserContext) as AuthContext;
  const favoriteMutation = useNewFavorite(
    product.productsId,
    user.userId || ""
  );

  const addToCart = () => {
    if (cart.some((item: OrderItem) => item.productId === product.productsId)) {
      setCart((prev: OrderItem[]) =>
        prev.map((item: OrderItem) => {
          if (item.productId === product.productsId) {
            return {
              ...item,
              quantity: quantity,
            };
          }
          return item;
        })
      );
      toast({
        title: "Cart updated",
        description: "Item quantity updated",
      });
    } else {
      setCart([
        ...cart,
        {
          productId: product.productsId,
          quantity,
          name: product.name,
          price: product.price,
          image: product.image,
          slug: product.slug,
        } as OrderItem,
      ]);
      toast({
        title: "Added to cart",
        description: "Item added to cart",
      });
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setQuantity(1);
  }, [location.pathname]);

  const handleCart = (operation: string) => {
    setQuantity((prevQuantity) =>
      operation === "p"
        ? prevQuantity >= 10
          ? prevQuantity
          : prevQuantity + 1
        : prevQuantity <= 1
        ? prevQuantity
        : prevQuantity - 1
    );
  };

  const handleFavorite = () => {
    favoriteMutation.mutate();
    toast({
      title: "Added to favorites",
      description: "Item added to favorites",
    });
  };

  useEffect(() => {
    if (favoriteMutation.isSuccess) {
      favoriteMutation.reset();
    }

    if (favoriteMutation.isError) {
      toast({
        title: "Error",
        description: "Item already favorited",
      });
    }
  }, [favoriteMutation.isSuccess, favoriteMutation.isError, toast]);

  return (
    <main className="w-screen md:w-[70vw] lg:grid grid-cols-2 m-auto gap-5 flex flex-col font-inter mt-5 lg:mt-10 mb-40">
      <div className="flex flex-col w-full gap-2 lg:col-span-1">
        <div className="flex gap-3 mb-2 ml-2 lg:ml-0">
          <span className="font-[500] ">{Capitalize(product.pet.name)}</span>
          <span>{" > "} </span>
          <span className="font-[500] ">
            {Capitalize(product.category.name)}
          </span>
        </div>
        <img
          src={product.image}
          alt="product image"
          className="w-[80%] m-auto lg:m-0 dark:rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-8 px-3 mt-2 lg:col-span-1 lg:mt-10">
        <h1 className="text-3xl font-[450] text-zinc-800 dark:text-zinc-200 font-inter">
          {product.name}
        </h1>
        <div className="flex gap-6">
          {product.stock >= 1 ? (
            <span className="font-semibold text-green-500">In stock</span>
          ) : (
            <span className="text-red-500">Out of stock</span>
          )}
          <hr className="h-6 border-r border-zinc-400" />
          <button
            className="text-zinc-500 dark:text-zinc-300 hover:underline"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("description")!.offsetTop,

                behavior: "smooth",
              })
            }
          >
            Check Description
          </button>
        </div>
        <hr className="border-b border-b-zinc-100" />
        <div className="flex items-center justify-between px-3">
          <span className="text-2xl font-semibold texdt-zinc-800 dark:text-zinc-200">
            $ {" " + product.price}
          </span>
          <button
            className="p-2 duration-200 border rounded-full shadow-xl border-zinc-200 dark:border-zinc-700 dark:bg-slate-900 text-sky-500 hover:scale-110"
            onClick={handleFavorite}
          >
            <Heart size={30} />
          </button>
        </div>
        <div className="flex gap-3 px-3 lg:mt-14">
          <div className="flex border w-fit">
            <button
              className="flex items-center p-2 border"
              onClick={() => handleCart("m")}
            >
              <Minus size={25} />
            </button>
            <span className="w-12 px-4 py-2 text-lg text-center border">
              {quantity}
            </span>
            <button
              className="flex items-center p-2 border"
              onClick={() => handleCart("p")}
            >
              <Plus size={25} />
            </button>
          </div>
          <button
            className="flex-1 text-lg text-white rounded-lg bg-sky-600"
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
      <hr className="col-span-2 mt-10 border-b border-zinc-200" />
      <div className="w-screen md:w-[70vw] ">
        <RecommendedProducts pet={product.pet.name} />
      </div>
      <hr className="col-span-2 mt-10 border-b border-zinc-200" />
      <div className="container col-span-2" id="description">
        <h2 className="text-xl font-semibold ">Description</h2>
        <p className="mt-6 text-lg">{product.description}</p>
      </div>
    </main>
  );
};
export default ProductDetails;
