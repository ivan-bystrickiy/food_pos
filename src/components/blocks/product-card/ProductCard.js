import "./ProductCard.scss";

import { addToCart } from "../../../store/cart";
import { useDispatch } from "react-redux";

function ProductCard(props) {
  const { data: product, deliveryType = "dinein" } = props;
  const { image, name, price, avaliable_count } = product;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart([product, undefined, deliveryType]));
  };

  return (
    <button className="ProductCart" onClick={handleClick}>
      <img className="ProductCart__image" src={image} alt="" />
      <h3 className="ProductCart__title">{name}</h3>
      <div className="ProductCart__price">$ {price}</div>
      <div className="ProductCart__count">
        {avaliable_count} Bowls available
      </div>
    </button>
  );
}

export { ProductCard };
