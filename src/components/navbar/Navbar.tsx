import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import Button from "../button/Button";

function Navbar() {
  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className="flex flex-row-reverse justify-between">
          <ul className="flex flex-row-reverse items-center">
            <li className="ml-4">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-4">
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>

          <div>
            <Link to="/cart">
            <Button className="!p-2" variant="primary">سبد خرید</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
