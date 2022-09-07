import React, { useEffect, useState } from "react";
import { getCategories } from "../api/categories";

import CategoryCards from "../components/CategoryCards";

import Grid from "../components/Grid";
import Layout from "../components/Layout";

const Categories = () => {
    const [category, setCategory] = useState([]);
    const [countArticles, setCountArticles] = useState(0);

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        let ids = localStorage.getItem("basketProducts");
        let basketProducts = JSON.parse(ids);
        setCountArticles(basketProducts.length);
    };

    const fetchCategories = async () => {
        const data = await getCategories();
        setCategory(data);
    };
    console.log(category);

    return (
        <Layout countArticles={countArticles}>
            <Grid>
                {category.map((category) => {
                    return <CategoryCards category={category} />;
                })}
            </Grid>
        </Layout>
    );
};

export default Categories;
