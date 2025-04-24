import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";

function Cart() {
  return (
    <div>
      <div>
        <Container>
          <div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="bg-gray-200 rounded my-1 p-4">
            <p className="text-right pb-2">قیمت کل: 25,000,000ريال</p>
            <p className="text-right pb-2">تخفیف شما: 5,000,000ريال</p>
            <p className="text-right pb-2">قیمت نهایی: 20,000,000ريال</p>
          </div>

          <Button className="mt-2" variant="success">
            ثبت سفارش
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default Cart;
