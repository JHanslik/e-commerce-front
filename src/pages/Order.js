import React, { useEffect, useState } from "react";
import { getOrders, getOrdersIds } from "../api/order";
import OrderCard from "../components/OrderCard";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };
  console.log(orders);

  // ******************************

  return (
    <section>
      {orders.map((order) => {
        return <OrderCard order={order} />;
      })}
    </section>
  );
};

export default Order;
