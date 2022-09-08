const getArticle = async (categoryId) => {
    const request = await fetch(
        `http://localhost:5000/products${
            categoryId ? `?category=${categoryId}` : ""
        }`
    );
    const response = await request.json();
    return response;
};
const getOneArticle = async (id) => {
    const request = await fetch(`http://localhost:5000/products/${id}`);
    const response = await request.json();
    return response;
};

export { getArticle, getOneArticle };
