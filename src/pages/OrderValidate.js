import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrdersIds } from "../api/order";
import Layout from "../components/Layout";

const Product = () => {
    const params = useParams();
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetchOneOrder();
    }, []);

    const fetchOneOrder = async (id) => {
        const data = await getOrdersIds(params.id);
        setOrder(data);
    };

    console.log(order);

    return (
        <Layout>
            <div className="text-center m-5 min-w-[280px] shadow-md bg-gray-800 border-gray-700 rounded-lg">
                <div className="p-3 h-[35%]">
                    <h3 className="text-3xl text-white pb-5">
                        Thanks you for your order !
                    </h3>
                    <h5 className="mb-3 font-normal  text-gray-400">
                        Customer name : {order.customerName}
                    </h5>

                    <p className="mb-3 font-normal  text-gray-400">
                        Customer adress : {order.customerAdress}
                    </p>
                    <p className="mb-3 font-normal  text-gray-400">
                        Customer E-mail : {order.customerEmail}
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Product;
