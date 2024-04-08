import { Order } from "@/utils/Types & Interfaces";
import { Package } from "lucide-react";
import { useState } from "react";
import { DateTime } from "ts-luxon";
import OrderModal from "./OrderModal";

type Props = {
  order: Order;
};

const CompletedOrderItem = ({ order }: Props) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="flex flex-col gap-4 px-3 py-6 border shadow-lg border-zinc-300 rounded-xl font-roboto dark:border-zinc-700">
        <h2 className="text-lg font-bold text-zinc-600 dark:text-zinc-200">
          Order {order.id.slice(0, 7)}
        </h2>
        <span className="flex gap-3 text-base font-bold text-sky-700 dark:text-sky-500">
          <Package /> Package delivered
        </span>
        <p className="text-lg font-semibold lg:text-base text-zinc-700 dark:text-zinc-200">
          Order Date:{" "}
          <span className="text-lg font-bold lg:text-base text-zinc-700 dark:text-zinc-300">
            {DateTime.fromJSDate(
              typeof order.orderDate === "string"
                ? new Date(order.orderDate)
                : order.orderDate
            ).toFormat("MM/dd/yyyy")}
          </span>
        </p>
        <div className="flex items-end gap-5">
          {order.orderItems.map((item, index) => {
            if (index == 3)
              return (
                <span
                  className="font-semibold text-zinc-700 dark:text-zinc-200"
                  key={item.product.slug}
                >
                  and {order.orderItems.length - 3 + " more"}
                </span>
              );
            if (index >= 4) return;
            return (
              <div className="relative" key={item.product.slug}>
                <img
                  src={item.product.image}
                  alt="product image"
                  className="object-cover w-16 h-16 border-2 rounded-lg shadow-md border-zinc-200"
                />
                <span className="absolute bottom-0 px-2 text-white rounded-full -right-3 bg-sky-500">
                  {item.quantity}
                </span>
              </div>
            );
          })}
        </div>
        <span className="text-lg font-bold lg:self-end text-zinc-600 dark:text-zinc-200">
          Total value: $ {Number(order.totalValue).toFixed(2)}
        </span>
        <hr className="border border-zinc-200 dark:border-zinc-600" />
        <button
          className="self-end w-full py-3 m-auto text-white duration-200 lg:m-0 lg:w-1/4 bg-sky-500 rounded-xl hover:bg-sky-400"
          onClick={openModal}
        >
          Details
        </button>
      </div>
      {modal && <OrderModal closeModal={closeModal} order={order} />}
    </>
  );
};
export default CompletedOrderItem;
