import { Order } from "@/utils/Types & Interfaces";
import { Package } from "lucide-react";
import { DateTime } from "ts-luxon";

type Props = {
  order: Order;
};

const CompletedOrderItem = ({ order }: Props) => {
  return (
    <div className="flex flex-col gap-4 px-3 py-6 border shadow-lg border-zinc-300 rounded-xl font-roboto">
      <h2 className="text-lg font-bold text-zinc-600">
        Order {order.id.slice(0, 7)}
      </h2>
      <span className="flex gap-3 text-base font-bold text-sky-700">
        <Package /> Package delivered
      </span>
      <p className="text-lg font-semibold lg:text-base text-zinc-700">
        Order Date:{" "}
        <span className="text-lg font-bold lg:text-base text-zinc-700">
          {DateTime.fromJSDate(
            typeof order.orderDate === "string"
              ? new Date(order.orderDate)
              : order.orderDate
          ).toFormat("MM/dd/yyyy")}
        </span>
      </p>
      <div className="flex ">
        {order.orderItems.map((item, index) => {
          if (index >= 3) return;
          return (
            <div className="relative" key={item.product.slug}>
              <img
                src={item.product.image}
                alt=""
                className="object-cover w-16 h-16 rounded-lg"
              />
              <span className="absolute bottom-0 px-2 text-white rounded-full right-1 bg-sky-500">
                {item.quantity}
              </span>
            </div>
          );
        })}
      </div>
      <span className="text-lg font-bold lg:self-end text-zinc-600">
        Total value: $ {order.totalValue}
      </span>
      <hr className="border border-zinc-200" />
      <button className="self-end w-full py-3 m-auto text-white duration-200 lg:m-0 lg:w-1/4 bg-sky-500 rounded-xl hover:bg-sky-400">
        Details
      </button>
    </div>
  );
};
export default CompletedOrderItem;
