import React, { useEffect, useState } from "react";
import { getOrders, getOrdersIds } from "../api/order";

const Product = () => {

    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        const data = await getOrders(id);
        setOrders(data);
    };

    const fetchOneOrder = async () => {
        const data = await getOrdersIds(orders[-1].id);
        setOrder(data);
    }
    
    console.log(order);

    return (
        <>
            <h1 className="">Thanks you for your order !</h1>
            <button></button>
        </>
    );
};

export default Product;
