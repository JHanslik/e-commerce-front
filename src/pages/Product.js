import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getOneArticle } from "../api/articles";
import ProductArticle from "../components/ProductArticle";
import Layout from "../components/Layout";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [countArticles, setCountArticles] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        fetchOneArticle();
        fetchProducts();
    }, []);

    const fetchOneArticle = async () => {
        const data = await getOneArticle(id);
        setProduct(data);
    };

    const fetchProducts = async () => {
        let ids = localStorage.getItem("basketProducts");
        let basketProducts = JSON.parse(ids);
        setCountArticles(basketProducts.length);
    };

    return (
        <Layout countArticles={countArticles}>
            <ProductArticle product={product} />
        </Layout>
    );
};

export default Product;
