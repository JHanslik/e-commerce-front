import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getArticle} from "../api/articles";
import Grid from "../components/Grid";


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
      <Grid>
        {articles.map((article) => {
          return <Card article={article} />;
        })}
      </Grid>
    </>
  );
};

export default Home;
