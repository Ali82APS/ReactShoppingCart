import { useEffect, useState } from "react";
import ProductItems from "../../components/productItems/ProductItems";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { getProduct } from "../services/api";
import { Products } from "../../types/server";

function Store() {
  const [products, setproducts] = useState<Products[]>([]);

  useEffect(() => {
    getProduct().then((result) => {
      setproducts(result);
    });
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدیدترین محصولات</h1>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItems {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
