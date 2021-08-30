import CheckIcon from "../../../../static/images/payments/Icon-Fill-checkmark-circle.svg";
import CreditIcon from "../../../../static/images/payments/Icon-Line-Card.svg";
import PaypalIcon from "../../../../static/images/payments/Icon-Line-Paypal.svg";
import WalletIcon from "../../../../static/images/payments/Icon-Line-Iconly-Light outline-Wallet.svg";
import { useState } from "react";

const VALUES = [
  { name: "Credit Card", value: "card", icon: CreditIcon },
  { name: "PayPal", value: "paypal", icon: PaypalIcon },
  { name: "Cash", value: "cash", icon: WalletIcon },
]

function PaymentMethodsSelect({ defaultValue, onChange, className, ...rest }) {
  const [value, setValue] = useState(defaultValue)

  const handleChange = (e) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div className={"PaymentMethodsSelect " + className} {...rest}>
      {VALUES.map(payment => (
        <label className={`PaymentMethodsSelect__item ${payment.value === value ? 'PaymentMethodsSelect__item_active' : ''}`}>
          <input onChange={handleChange} type="radio" name="payment-method" value={payment.value} hidden />
          <img src={payment.icon} alt="" />
          <span>{payment.name}</span>
          <img
            className="PaymentMethodsSelect__item__check"
            alt=""
            src={CheckIcon}
          />
        </label>
      ))}
    </div>
  );
}

export { PaymentMethodsSelect };
