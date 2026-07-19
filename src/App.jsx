import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {

    return (

        <>

            <NavBar />

            <main className="container my-4">

                <Routes>

                    <Route
                        path="/"
                        element={<ItemListContainer />}
                    />

                    <Route
                        path="/category/:categoryId"
                        element={<ItemListContainer />}
                    />

                    <Route
                        path="/item/:itemId"
                        element={<ItemDetailContainer />}
                    />

                    <Route
                        path="/cart"
                        element={<Cart />}
                    />

                    <Route
                        path="/checkout"
                        element={<Checkout />}
                    />

                </Routes>

            </main>

            <Footer />

        </>

    );

}

export default App;