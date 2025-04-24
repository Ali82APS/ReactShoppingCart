import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Store from "./pages/store/Store.tsx";
import Layout from "./components/layout/Layout.tsx";
import Product from "./pages/product/Product.tsx";
import Cart from "./pages/cart/Cart.tsx";
import Container from "./components/container/Container.tsx";

function App() {
  return (
    <>
      <Container>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </Container>
    </>
  );
}

export default App;
