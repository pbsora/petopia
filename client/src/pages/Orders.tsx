import { UserContext } from "@/hooks/Context/UserContext";
import { useGetOrders } from "@/lib/Queries/CartQueries";
import { AuthContext } from "@/utils/Types & Interfaces";
import { useContext } from "react";

const Orders = () => {
  const { user } = useContext(UserContext) as AuthContext;
  const orders = useGetOrders(user.userId || "");

  console.log(orders.data?.data);

  return <div>Orders</div>;
};
export default Orders;
