import { UserContext } from "@/hooks/Context/UserContext";
import { useGetOrders } from "@/lib/Queries/CartQueries";
import { AuthContext, Order } from "@/utils/Types & Interfaces";
import { useContext } from "react";

const Orders = () => {
  const { user } = useContext(UserContext) as AuthContext;
  const orderQuery = useGetOrders(user.userId || "");
  const orders = orderQuery.data?.data as Order[];
  console.log(orders);

  return <div>Orders</div>;
};
export default Orders;
