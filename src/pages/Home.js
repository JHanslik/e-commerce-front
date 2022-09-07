import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getArticle } from "../api/articles";
import Grid from "../components/Grid";
import Layout from "../components/Layout";

const Home = ({}) => {
    const [articles, setArticles] = useState([]);
    const [countArticles, setCountArticles] = useState(0);

    useEffect(() => {
        fetchArticle();
        fetchProducts();
    }, []);

    const fetchArticle = async () => {
        const data = await getArticle();
        setArticles(data);
    };

    const fetchProducts = async () => {
        let ids = localStorage.getItem("basketProducts");
        let basketProducts = JSON.parse(ids);
        setCountArticles(basketProducts.length);
    };

    return (
        <Layout countArticles={countArticles}>
            <Grid>
                {articles.map((article) => {
                    return (
                        <Card
                            article={article}
                            setCountArticles={setCountArticles}
                        />
                    );
                })}
            </Grid>
        </Layout>
    );
};

export default Home;
