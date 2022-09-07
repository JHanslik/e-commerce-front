import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getOneArticle } from "../api/articles";

const Product = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchOneArticle();
  }, []);
  const fetchOneArticle = async () => {
    const data = await getOneArticle(id);
    setProduct(data);
  };
  console.log(product);
  return <>ergeeq</>;
};

export default Product;
