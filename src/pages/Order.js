import React, { useEffect, useState } from "react";
import { getOneArticle } from "../api/articles";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import Card from "../components/Card";

const Order = () => {
    const [articles, setArticles] = useState([]);
    const [countArticles, setCountArticles] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

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

    // ******************************

    return (
        <Layout countArticles={countArticles}>
            <section className="flex justify-center items-center gap-20 p-11">
                <h2 className="text-center text-xl rounded-lg py-2 px-4 bg-gray-300 text-gray-800 drop-shadow-lg">
                    Total Price : {totalPrice / 100} $
                </h2>
                <button className="inline-flex drop-shadow-lg items-center text-lg rounded-lg py-2 px-4 bg-gray-800 text-white hover:bg-blue-700 hover:drop-shadow-none">Confirm your order</button>
            </section>
            <div className="box ">
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
