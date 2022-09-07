import React, { useEffect, useState } from "react";
import { getOrders } from "../api/order";

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
  return <div>Order</div>;
};

export default Order;
