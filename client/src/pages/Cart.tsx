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
import mastercard from "@/assets/cards/mastercard.svg";
import visa from "@/assets/cards/visa.svg";
import amex from "@/assets/cards/amex.svg";
import elo from "@/assets/cards/elo.svg";

const Cart = () => {
  const [cartLs, setCartLs] = useLocalStorage("cart", []);
  const cartItems = [...cartLs];

  const { user } = useContext(UserContext) as AuthContext;
  const { toast } = useToast();

  const cart: CheckoutItem[] = cartItems.map((item) => ({
    quantity: item.quantity,
    productId: item.productId,
  }));
  const checkoutMutation = useCheckout(cart, user.userId || "");

  const navigate = useNavigate();

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.username) {
      return navigate("/login?next=cart");
    }
    checkoutMutation.mutate();
  };

  const deleteItem = (id: string) => {
    const newCart = cartItems.filter((item) => item.productId !== id);
    setCartLs(newCart);
    toast({
      title: "Item deleted",
      description: `The item was removed from your cart!`,
    });
  };

  useEffect(() => {
    if (checkoutMutation.isSuccess) {
      localStorage.removeItem("cart");
      navigate("/profile/orders");
    }
    if (checkoutMutation.isError) {
      toast({
        title: "Error",
        description: `Something went wrong! Please try again.`,
      });
    }
  }, [checkoutMutation.isError, checkoutMutation.isSuccess, navigate, toast]);

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
          to={"/disclaimer"}
          className="underline underline-offset-1 text-zinc-500 dark:text-zinc-300"
        >
          Check rules
        </Link>
      </div>
      <form
        className="flex flex-col  xl:w-[80%] grid-cols-3 m-auto font-inter lg:grid lg:mt-10 mb-12 lg:mb-0"
        onSubmit={handleCheckout}
      >
        <h1 className="hidden col-span-3 mb-4 ml-3 text-2xl font-semibold text-zinc-700 xl:block dark:text-zinc-200">
          Shopping bag
        </h1>
        <div className="flex col-span-3 gap-2 px-3 py-3 text-blue-700 dark:text-zinc-300 bg-slate-100 dark:bg-slate-800 font-madimi lg:hidden">
          <div className="flex items-center">
            <Clock size={25} />
          </div>
          <p>Sign-up right now and get 10% OFF on your first purchase! </p>
        </div>
        <div className="container flex flex-col col-span-2 px-4 py-6 dark:text-zinc-200 text-zinc-900">
          <div className="flex gap-16 pr-16">
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
          <div
            className="flex flex-col gap-6  max-h-[85vh] lg:h-[80vh] overflow-y-auto pr-3 "
            id="content"
          >
            {cartItems.length !== 0 ? (
              cartItems.map((item: OrderItem) => (
                <Fragment key={item.productId}>
                  <CartItem
                    product={item}
                    setCartItems={setCartLs}
                    deleteItem={deleteItem}
                  />
                </Fragment>
              ))
            ) : (
              <p className="py-10 mt-10 text-center text-zinc-500 lg:py-0 dark:text-zinc-300">
                No items in cart
              </p>
            )}
          </div>
          {cartItems.length >= 3 && (
            <p className="mt-3 text-zinc-500 lg:hidden dark:text-zinc-300">
              *If you have more than 3 items in your cart, please scroll on the
              items
            </p>
          )}
        </div>
        <hr className="w-[90%] m-auto border border-zinc-300 my-6 lg:hidden " />
        <div className="flex flex-col gap-10 px-5 pt-6 ">
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
            <button className="flex items-center justify-center w-full py-3 text-sm font-semibold text-white duration-200 bg-blue-500 rounded-lg hover:bg-blue-400">
              {checkoutMutation.isPending ? (
                <MoonLoader size={20} />
              ) : (
                "Checkout"
              )}
            </button>
            <button
              className="w-full py-3 mt-4 text-sm font-semibold duration-200 border rounded-lg border-zinc-500 hover:bg-zinc-200"
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
              <img src={mastercard} alt="mastercard icon" />
              <img src={visa} alt="visa icon" />
              <img src={amex} alt="american express icon" />
              <img src={elo} alt="elo icon" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Cart;
