import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getArticle } from "../api/articles";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    const data = await getArticle();
    setArticles(data);
  };

  return (
    <>
      <h1>Articles</h1>
      {articles.map((article) => {
        return <Card article={article} />;
      })}
    </>
  );
};

export default Home;
