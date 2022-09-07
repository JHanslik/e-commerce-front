const getCategories = async () => {
  const request = await fetch(`http://localhost:5000/categories`);
  const response = await request.json();
  return response;
};
export { getCategories };
