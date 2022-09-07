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
    }, []);

    const fetchOrders = async () => {
        const data = await getOrders();
        setOrders(data);
    };

    // ******************************

    return <div></div>;
};

export default Order;
