import React, { useEffect, useState } from "react";
import { getOneArticle } from "../api/articles";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Card from "../components/Card";

const Order = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const [countArticles, setCountArticles] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        sumTotalPrice();
    }, [articles]);

    const fetchOrders = async (id) => {
        const data = await getOneArticle(id);
        return data;
    };
    const fetchProducts = async () => {
        let ids = localStorage.getItem("basketProducts");
        let basketProducts = JSON.parse(ids);
        setCountArticles(basketProducts.length);
        const promises = basketProducts.map((id) => fetchOrders(id));
        const promiseAllResults = await Promise.all(promises);

        setArticles(promiseAllResults);
    };

    const handleClickRemoveFavorite = (id) => {
        let clonedArticles = [...articles];
        const article = clonedArticles.find((article) => article.id === id);
        clonedArticles.splice(clonedArticles.indexOf(article), 1);
        setArticles(clonedArticles);
    };

    const sumTotalPrice = () => {
        let prices = 0;
        articles.forEach((article) => (prices += article.price));
        setTotalPrice(prices);
    };

    const handleClickConfirm = async (e) => {
        const order = {
            totalPrice,
        };

        const request = await fetch("http://localhost:5000/orders/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        });

        const response = await request.json();

        if (request.status === 201) {
            let ids = localStorage.getItem("basketProducts");
            let basketProducts = JSON.parse(ids);
            basketProducts = [];
            let stringifiedBasketProducts = JSON.stringify(basketProducts);
            localStorage.setItem("basketProducts", stringifiedBasketProducts);
            console.log(response.id);
            navigate(`../orders/${response.id}`);
        } else {
            console.log(response);
            setErrors(response);
        }
    };

    // ******************************

    return (
        <Layout countArticles={countArticles}>
            <section className="flex justify-center items-center gap-20 p-11">
                <h2 className="text-center text-xl rounded-lg py-2 px-4 bg-gray-300 text-gray-800 drop-shadow-lg">
                    Total Price : {totalPrice / 100} $
                </h2>
                <button
                    className="inline-flex drop-shadow-lg items-center text-lg rounded-lg py-2 px-4 bg-gray-800 text-white hover:bg-blue-700 hover:drop-shadow-none"
                    onClick={handleClickConfirm}
                >
                    Confirm your order
                </button>
            </section>
            <div className="flex gap-[40px] overflow-x-scroll">
                {articles.map((article) => {
                    return (
                        <Card
                            key={article.name}
                            article={article}
                            setCountArticles={setCountArticles}
                            removeFunctionRender={handleClickRemoveFavorite}
                        />
                    );
                })}
            </div>
        </Layout>
    );
};

export default Order;
