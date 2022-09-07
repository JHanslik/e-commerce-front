const getArticle = async () => {
  const request = await fetch(`http://localhost:5000/products`);
  const response = await request.json();
  return response;
};
const getOneArticle = async (id) => {
  const request = await fetch(`http://localhost:5000/products/${id}`);
  const response = await request.json();
  return response;
};

export { getArticle, getOneArticle };
