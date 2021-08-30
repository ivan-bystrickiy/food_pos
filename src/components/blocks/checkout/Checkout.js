import "./Checkout.scss";

import { Confirmation } from "./components/Confirmation";
import { Payment } from "./components/Payment";

function Checkout({ visible, hide }) {
  return (
    <div className={`Checkout ${visible ? 'Checkout_visible' : ''}`}>
      <Confirmation hideCheckout={hide} />
      <Payment hideCheckout={hide} />
    </div>
  );
}

export { Checkout };
