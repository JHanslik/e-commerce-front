const OrderCard = ({ order }) => {
  return (
    <section className="flex gap-10 justify-between">
      <p>{order.customerName}</p>
      <p>{order.customerAdress}</p>
      <p>{order.totalPrice}</p>
    </section>
  );
};

export default OrderCard;
