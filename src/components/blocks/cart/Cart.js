import "./Cart.scss";

import { Button } from "../../ui/button/Button";
import { ProductList } from "./components/ProductsList";
import { useSelector } from "react-redux";
import { useState } from "react";

export const deliveryTypes = [
  { name: "Dine In", value: "dinein" },
  { name: "To Go", value: "togo" },
  { name: "Delivery", value: "delivery" },
];

function Cart({ onShowCheckout }) {
  const [active, setActive] = useState(deliveryTypes[0].value);
  const products = useSelector((state) => state.cart.products);

  const subtotalPrice = Object.values(products)
    .reduce((acc, value) => {
      return acc + value.count * value.product.price;
    }, 0)
    .toFixed(2);

  return (
    <div class="Cart">
      <h2 className="h2">Orders #34562</h2>

      <div>
        {deliveryTypes.map(({ name, value }, idx) => (
          <Button
            onClick={() => setActive(value)}
            label={name}
            key={idx}
            color="primary"
            theme={value === active ? "default" : "outline"}
            className="mr-2"
          />
        ))}
      </div>

      <ProductList activeDeliveryType={active} />

      <div style={{ padding: "30px 0 0 0", borderTop: "1px solid #393C49" }}>
        <div className="d-flex justify-content-between mb-3">
          <small className="text-gray">Discount</small>
          <span>$0</span>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <small className="text-gray">Sub total</small>
          <span>${subtotalPrice}</span>
        </div>

        <Button
          label="Continue to payment"
          disabled={subtotalPrice <= 0}
          fullWidth
          size="lg"
          style={{ boxShadow: "0px 8px 24px rgba(234, 124, 105, 0.3)" }}
          onClick={onShowCheckout}
        />
      </div>
    </div>
  );
}

export { Cart };
