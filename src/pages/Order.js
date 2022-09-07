import React, { useEffect, useState } from "react";
import { getOrders, getOrdersIds } from "../api/order";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Order = () => {
    const [orders, setOrders] = useState([]);
    const { id } = useParams();
    const [countArticles, setCountArticles] = useState(0);

    useEffect(() => {
        fetchOrders();
        fetchProducts();
    }, []);

    const fetchOrders = async () => {
        const data = await getOrders();
        setOrders(data);
    };
    const fetchProducts = async () => {
        let ids = localStorage.getItem("basketProducts");
        let basketProducts = JSON.parse(ids);
        setCountArticles(basketProducts.length);
    };

    // ******************************

    return <Layout countArticles={countArticles}></Layout>;
};

export default Order;
