import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { Products as Iproduct } from "../../types/server";

function Product() {
  const params = useParams<{ id: string }>();

  const [product, setproducts] = useState<Iproduct>();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setproducts(data);
    });
  }, []);
  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className=" col-span-10 text-right p-4">
            <h1>{product?.title}</h1>
            <div>
              <p className="my-2">{product?.price}</p>
              <p>{product?.description}</p>
            </div>
          </div>
          <div className="bg-stone-200 col-span-2 p-4">
            <img className="rounded" src={product?.image} alt="" />
            <div>
              <Button className="mt-2  w-full !py-3" variant="primary">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
