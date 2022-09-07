import React, { useEffect, useState } from "react";
import { getCategories } from "../api/categories";
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
  return <div>Category</div>;
};

export default Categories;
