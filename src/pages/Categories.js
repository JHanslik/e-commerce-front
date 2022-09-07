import React, { useEffect, useState } from "react";
import { getCategories } from "../api/categories";

import CategoryCards from "../components/CategoryCards";

import Grid from "../components/Grid";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategory(data);
  };
  console.log(category);

  return (
    <>
      <Grid>
        {category.map((category) => {
          return <CategoryCards category={category} />;
        })}
      </Grid>
    </>
  );


};

export default Categories;
