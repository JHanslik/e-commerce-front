import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getArticle } from "../api/articles";
import { getCategories } from "../api/categories";
import Grid from "../components/Grid";
import Layout from "../components/Layout";
import Select from "../components/Select"

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [countArticles, setCountArticles] = useState(0);
    const [options, setOptions] = useState([])
    const [category, setCategory] = useState('')


    useEffect(() => {
        fetchArticle();
        fetchProducts();
        fetchdateBis()
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

    const handleChangeCat = (e) => {
      setCategory(e.target.value)
  }

  const fetchdateBis = async () => {
    const data = await getCategories()
    console.log(data);

    let optionsMap = data.map((r) => {
        return {
            value: r.name, 
            text: r.name
        }
    })

    setOptions(optionsMap);

}

    return (
        <Layout countArticles={countArticles}>
            <Select label="Categories" handleChange={handleChangeCat} options={options} value={category} />
            <Grid>
                {articles.map((article) => {
                    return (
                        <Card
                            key={article.name}
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
