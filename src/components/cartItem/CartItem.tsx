import Button from "../button/Button";

function CartItem() {
  return (
    <div className="flex flex-row-reverse mt-5 border-b pb-2">
      <img
        className="rounded w-30"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEklXWJxshj9SKQ-jhRnj4iMux7zaZ-mR7BA&s
"
        alt=""
      />
      <div className="mr-4">
        <h3 className="text-right mb-4">عنوان محصول</h3>
        <Button className="mr-2" variant="danger">
          Remove
        </Button>
        <Button variant="primary">+</Button>
        <span className="mx-2">{2}</span>
        <Button variant="primary">-</Button>
      </div>
    </div>
  );
}

export default CartItem;
