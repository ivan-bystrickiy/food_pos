import { Button } from "../../../ui/button/Button";
import { ProductList } from "../../cart/components/ProductsList";
import { useSelector } from "react-redux";

function Confirmation({ hideCheckout }) {
  const products = useSelector((state) => state.cart.products);

  const subtotalPrice = Object.values(products)
    .reduce((acc, value) => {
      return acc + value.count * value.product.price;
    }, 0)
    .toFixed(2);

  return (
    <div className="Confirmation">
      <Button flat onClick={hideCheckout} style={{ textAlign: "left", paddingLeft: 0 }}>
        <i className="icon-Back" style={{ fontSize: 25 }} />
      </Button>

      <div
        className="d-flex align-items-center mb-3 pb-3"
        style={{ borderBottom: "1px solid #393C49" }}
      >
        <div className="mr-auto">
          <h3 className="h1 mb-2 mt-2">Confirmation</h3>
          <span className="text-gray">Orders #34562</span>
        </div>
        <Button onClick={hideCheckout}>
          <i className="icon-Add" style={{ fontSize: 30 }} />
        </Button>
      </div>

      <ProductList withoutHeader />

      <div
        className="d-flex justify-content-between mb-3 pt-3 mt-3"
        style={{ borderTop: "1px solid #393C49" }}
      >
        <small className="text-gray">Discount</small>
        <span>$0</span>
      </div>
      <div className="d-flex justify-content-between">
        <small className="text-gray">Sub total</small>
        <span>${subtotalPrice}</span>
      </div>
    </div>
  );
}

export { Confirmation };
