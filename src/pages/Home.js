import React, { useEffect, useState } from "react";
import Card from "../components/Card";

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
      {articles.map((article) => {
        return <Card article={article} />;
      })}
    </>
  );
};

export default Home;
