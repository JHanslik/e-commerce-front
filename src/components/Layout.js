import { useEffect, useState } from "react";
import Container from "./Container";
import Header from "./Header";

const Layout = ({ children, countArticles }) => {
    // const [countArticles, setCountArticles] = useState(0);

    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    // const fetchProducts = async () => {
    //     let ids = localStorage.getItem("basketProducts");
    //     let basketProducts = JSON.parse(ids);
    //     setCountArticles(basketProducts.length);
    // };

    return (
        <>
            <Header countArticles={countArticles} />
            <Container
            // setCountArticles={setCountArticles}
            >
                {children}
            </Container>
        </>
    );
};

export default Layout;
