import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Product from "./pages/Product";
import OrderValidate from "./pages/OrderValidate";

import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/products/:id"} element={<Product />} />
                <Route path={"/categories"} element={<Categories />} />
                <Route path={"/orders"} element={<Order />} />
                <Route path={"/validation"} element={<OrderValidate />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
