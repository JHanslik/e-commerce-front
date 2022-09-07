import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Product from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products/:id"} element={<Product />} />
        <Route path={"/categories"} element={<Categories />} />
        <Route path={"/orders"} element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
