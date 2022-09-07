const getOrders = async () => {
  const request = await fetch(`http://localhost:5000/orders`);
  const response = await request.json();
  return response;
};

export { getOrders };
