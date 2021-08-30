import { addToCart, removeFromCart } from "../../../../store/cart";

import { Button } from "../../../ui/button/Button";
import { Input } from "../../../ui/input/Input";
import { useDispatch } from "react-redux";

function ProductItem({ data: { product, count, deliveryType } }) {
  const dispatch = useDispatch();

  const delFromCart = () => {
    dispatch(removeFromCart(`${product.id}-${deliveryType}`));
  };

  const changeCount = (e) => {
    dispatch(addToCart([product, parseInt(e.target.value) , deliveryType]));
  };

  return (
    <tr>
      <td colSpan="2">
        <div className="CartProducts__item">
          <div>
            <img src={product.image} alt="" />
            <div style={{ flex: "1" }}>
              <h3>{product.name}</h3>
              <span>$ {product.price}</span>
            </div>
            <Input onChange={changeCount} value={count} selectOnFocus />
          </div>
          <Input placeholder="Order Note..." />
        </div>
      </td>
      <td>
        <span className="CartProducts__price">$ {product.price * count}</span>
        <Button
          onClick={delFromCart}
          theme="outline"
          color="pink"
          style={{ borderColor: "#FF7CA3" }}
        >
          <i className="icon-Trash" style={{ fontSize: "26px" }} />
        </Button>
      </td>
    </tr>
  );
}

export { ProductItem };
