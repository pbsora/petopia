import { Order } from "@/utils/Types & Interfaces";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

type Props = {
  closeModal: () => void;
  order: Order;
};

const OrderModal = ({ closeModal, order }: Props) => {
  return (
    <>
      <div className="z-50 flex flex-col w-[95vw] lg:w-[85vw] m-auto inset-0 h-3/4 fixed border-2 py-4 border-zinc-400 shadow-sm dark:border-zinc-300 bg-background dark: rounded-xl duration-200 container font-roboto">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-zinc-700 dark:text-zinc-200">
            Order Details
          </h1>
          <button className="text-2xl" onClick={closeModal}>
            <IoMdCloseCircle />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {order?.orderItems.map((item) => (
            <div
              className="flex gap-4 p-4 border-b border-zinc-400 dark:border-zinc-300 "
              key={item.product.slug}
            >
              <img
                src={item.product.image}
                alt=""
                className="object-cover w-16 h-16 rounded-lg"
              />
              <div className="flex flex-col">
                <Link
                  to={`/product/${item.product.slug}`}
                  className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 hover:underline underline-offset-3"
                >
                  {item.product.name}
                </Link>
                <p className="text-base font-semibold text-zinc-600 dark:text-zinc-300">
                  Quantity: {item.quantity}
                </p>
                <p className="text-base font-semibold text-zinc-600 dark:text-zinc-300">
                  Price: ${item.product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="flex gap-2 text-xl font-bold text-zinc-700 dark:text-zinc-200">
            Total
            <span className="flex-1">
              ({order.orderItems.reduce((acc, curr) => acc + curr.quantity, 0)}{" "}
              Items):
            </span>
            <span>${Number(order.totalValue).toFixed(2)}</span>
          </h1>
        </div>
      </div>
      <div
        className="fixed top-0 left-0 z-10 w-screen h-screen duration-200 bg-zinc-800/40"
        style={{ pointerEvents: "auto" }}
        onClick={closeModal}
      ></div>
    </>
  );
};
export default OrderModal;
