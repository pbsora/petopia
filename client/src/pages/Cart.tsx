import CartItem from "@/components/Cart/CartItem";
import { UserContext } from "@/hooks/Context/UserContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useCheckout } from "@/lib/Queries/CartQueries";
import {
  AuthContext,
  CheckoutItem,
  OrderItem,
} from "@/utils/Types & Interfaces";
import { Clock, Truck } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { useToast } from "@/components/ui/use-toast";
import { MoonLoader } from "react-spinners";

const Cart = () => {
  const [cartLs, setCartLs] = useLocalStorage("cart", []);
  const cartItems = [...cartLs] as OrderItem[];

  const { user } = useContext(UserContext) as AuthContext;
  const { toast } = useToast();

  const cart: CheckoutItem[] = cartItems.map((item) => ({
    quantity: item.quantity,
    productId: item.productId,
  }));
  const checkoutMutation = useCheckout(cart, user.userId || "");

  const navigate = useNavigate();

  console.log(user);

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    checkoutMutation.mutate();
  };

  useEffect(() => {
    if (checkoutMutation.isSuccess) {
      setCartLs([]);
      navigate("/orders");
    }
    if (checkoutMutation.isError) {
      toast({
        title: "Error",
        description: "An error occurred",
      });
    }
  }, [
    checkoutMutation.isError,
    checkoutMutation.isSuccess,
    navigate,
    setCartLs,
    toast,
  ]);

  return (
    <>
      <div className="items-center justify-center hidden w-full gap-3 py-2 bg-orange-100/30 dark:bg-zinc-700 lg:flex">
        <Truck
          size={25}
          className="scale-x-[-1] transform text-zinc-700 dark:text-zinc-200"
        />
        <p className="font-semibold text-zinc-700 dark:text-zinc-200">
          Free shipping worldwide -{" "}
        </p>
        <Link
          to={"/"}
          className="underline underline-offset-1 text-zinc-500 dark:text-zinc-300"
        >
          Check rules
        </Link>
      </div>
      <form
        className="flex flex-col  xl:w-[80%] grid-cols-3 m-auto font-inter lg:grid lg:mt-10 mb-12"
        onSubmit={handleCheckout}
      >
        <h1 className="hidden col-span-3 mb-4 ml-3 text-2xl font-semibold text-zinc-700 xl:block dark:text-zinc-200">
          Shopping bag
        </h1>
        <div className="flex col-span-3 gap-2 px-3 py-3 text-blue-700 dark:text-zinc-300 bg-slate-100 dark:bg-slate-800 font-madimi lg:hidden">
          <div className="flex items-center">
            <Clock size={25} />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut,
            blanditiis, accusamus libero molestiae voluptates
          </p>
        </div>
        <div className="container flex flex-col col-span-2 px-4 py-6 dark:text-zinc-200 text-zinc-900">
          <div className="flex pr-14 gap-14">
            <h1 className="flex-1 mb-6 text-lg font-semibold lg:text-sm +text-zinc-600">
              Products
            </h1>
            <h1 className="hidden mb-6 text-base font-bold lg:block lg:text-sm text-zinc-600 dark:text-zinc-200">
              Price
            </h1>
            <h1 className="hidden mb-6 text-base font-semibold lg:block lg:text-sm text-zinc-600 dark:text-zinc-200">
              Quantity
            </h1>
            <h1 className="hidden mb-6 text-base font-semibold lg:block lg:text-sm text-zinc-600 dark:text-zinc-200">
              Total
            </h1>
          </div>
          <div className="flex flex-col gap-6  h-[85vh] lg:h-[70vh] overflow-y-scroll pr-3 scrollbar-thin ">
            {cartItems.length !== 0 ? (
              cartItems.map((item: OrderItem) => (
                <Fragment key={item.productId}>
                  <CartItem product={item} />
                </Fragment>
              ))
            ) : (
              <p className="text-center text-zinc-500">No items in cart</p>
            )}
          </div>
          <p className="mt-3 text-zinc-500 lg:hidden">
            *If you have more than 3 items in your cart, please scroll on the
            items
          </p>
        </div>
        <hr className="w-[90%] m-auto border border-zinc-300 my-6 lg:hidden " />
        <div className="flex flex-col justify-center gap-10 px-5 pt-6 ">
          <div className="flex items-center justify-between lg:hidden">
            <p className="text-lg text-zinc-700 dark:text-zinc-200">
              Total
              <span className="font-semibold text-zinc-900 dark:text-zinc-300">
                {" "}
                (
                {cartItems.reduce(
                  (acc, curr: OrderItem) => acc + curr.quantity,
                  0
                )}{" "}
                items)
              </span>
            </p>
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              ${" "}
              {cartItems
                .reduce(
                  (acc, curr: OrderItem) => acc + +curr.price * curr.quantity,
                  0
                )
                .toFixed(2)}
            </span>
          </div>
          <div className="">
            <label
              htmlFor="discount"
              className="block mb-3 font-semibold text-zinc-700 dark:text-zinc-200"
            >
              Discount coupon
            </label>
            <input
              type="text"
              id="discount"
              placeholder="Enter code"
              className="w-full px-2 py-2 text-sm border rounded-lg border-zinc-400 dark:bg-slate-700"
            />
          </div>
          <div className="flex-col hidden gap-4 lg:flex">
            <h2 className="font-semibold text-zinc-700 dark:text-zinc-200">
              Order summary
            </h2>
            <div className="flex justify-between">
              <p className="text-sm text-zinc-700 dark:text-zinc-200">
                Total
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-300">
                  {" "}
                  (
                  {cartItems.reduce(
                    (acc, curr: OrderItem) => acc + curr.quantity,
                    0
                  )}{" "}
                  items)
                </span>
              </p>
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                ${" "}
                {cartItems
                  .reduce(
                    (acc, curr: OrderItem) => acc + +curr.price * curr.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
          </div>
          <div>
            <button className="w-full py-3 text-sm font-semibold text-white bg-blue-500 rounded-lg">
              {checkoutMutation.isPending ? (
                <MoonLoader size={30} />
              ) : (
                "Checkout"
              )}
            </button>
            <button
              className="w-full py-3 mt-4 text-sm font-semibold border rounded-lg border-zinc-500"
              onClick={() => navigate("/")}
            >
              Continue shopping
            </button>
            <hr className="mt-6 border border-zinc-300" />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-sm font-semibold text-zinc-600 dark:text-zinc-200">
              Payment methods
            </h2>
            <div className="flex gap-3">
              <img
                src="https://www.petz.com.br/checkout/img/mastercard.5092dc30.svg"
                alt=""
              />
              <img
                src="https://www.petz.com.br/checkout/img/mastercard.5092dc30.svg"
                alt=""
              />
              <img
                src="https://www.petz.com.br/checkout/img/mastercard.5092dc30.svg"
                alt=""
              />
              <img
                src="https://www.petz.com.br/checkout/img/mastercard.5092dc30.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Cart;
