import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Grid from "../components/Grid"

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    const request = await fetch(`http://localhost:5000/products`);
    const response = await request.json();
    setArticles(response);
  };
  console.log(articles);
  return (
    <>
      <Grid>
      {articles.map((article) => {
        return <Card article={article} />;
      })}
      </Grid>
    </>
  );
};

export default Home;
