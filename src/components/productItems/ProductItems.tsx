import { Products } from "../../types/server";

type TproductItems = Products;

function ProductItems({title, price, description, image}:TproductItems) {
  return (
    <div className="shadow border-amber-30 rounded pb-4 h-100">
      <img
        className="rounded-t w-100 h-65"
        src={image}
        alt=""
      />
      <div className="flex justify-between  py-2 px-4">
        <h3 className="font-bold text-black">{title}</h3>
        <span className="font-bold text-black">{price}</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default ProductItems;
