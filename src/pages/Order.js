import React, { useEffect, useState } from "react";
import { getOrders, getOrdersIds } from "../api/order";
import { useParams } from "react-router-dom";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [basketProduct, setBaketProduct] = useState([]);
  const [favorite, setFavorites] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchOrders();
    fetchOrdersIds();
  }, []);

  const fetchOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  // ******************************

  const handleFavoriteClick = () => {
    let stringifiedFavoriteIds = localStorage.getItem("favoriteIds");
    let favoriteIds = [];

    if (stringifiedFavoriteIds) {
      favoriteIds = JSON.parse(stringifiedFavoriteIds);
    }

    if (!favoriteIds.includes(id)) {
      favoriteIds.push(id);
      stringifiedFavoriteIds = JSON.stringify(favoriteIds);
      localStorage.setItem("favoriteIds", stringifiedFavoriteIds);
      setIds(favoriteIds);
    } else {
      favoriteIds.splice(favoriteIds.indexOf(id), 1);
      let stringifiedFavoriteIds = JSON.stringify(favoriteIds);
      localStorage.setItem("favoriteIds", stringifiedFavoriteIds);
      setFavorites(favoriteIds);
      if (removeFunctionRender) {
        removeFunctionRender(id);
      }
    }
    const fetchOrdersIds = async (id) => {
      const data = await getOrdersIds(id);
      setBaketProduct(data);
    };

    // ******************************
  };
  console.log(basketProduct);
  return (
    <div>
      
    </div>
  );
};

export default Order;
