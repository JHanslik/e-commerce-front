import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getArticle, getOneArticle } from "../api/articles";
import Grid from "../components/Grid";
import { useParams } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchArticle();
    fetchOneArticle();
  }, []);

  const fetchArticle = async () => {
    const data = await getArticle();
    setArticles(data);
  };
  const fetchOneArticle = async () => {
    const data = await getOneArticle(id);
    setArticle(data);
  };
  console.log(article);

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
