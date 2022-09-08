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
            <section>
                <h2 className="text-center">
                    Total Price : {totalPrice / 100} $
                </h2>
            </section>
            <Grid>
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
            </Grid>
        </Layout>
    );
};

export default Order;
