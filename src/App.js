import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
