import { useState } from 'react'
import { Button } from "../../../ui/button/Button";
import { Input } from "../../../ui/input/Input";
import { Select } from "../../../ui/select/Select";
import { PaymentMethodsSelect } from "./PaymentMethodsSelect";

function Payment({ hideCheckout }) {
  const [formData, setFormData] = useState({
    holder_name: ''
  })
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    validate({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validate = (data) => {
    const errors = {}
    
    for (let name in data) {
      const value = data[name]
      switch (name) {
        case 'holder_name':
  
          if (!value) {
            errors[name] = 'Поле обязательно для заполнения'
          }
  
          break
      }
    }

    setFormErrors(errors)
  }

  console.log(formData, formErrors)

  return (
    <div className="Payment">
      <div
        className="pb-3 mb-3"
        style={{ borderBottom: "1px solid #393C49", marginTop: 42 }}
      >
        <h3 className="h1 mb-2 mt-2">Payment</h3>
        <span className="text-gray">3 payment method available</span>
      </div>

      <form style={{
        display: 'flex',
        flex: '1',
        flexDirection: 'column'
      }}>
        <h3 className="h2 mt-0">Payment Method</h3>
        <PaymentMethodsSelect defaultValue="card" onChange={console.log} className="mb-3" />
        <div class="mb-3">
          <label className="mb-2">Cardholder Name</label>
          <Input name="holder_name" onChange={handleChange} placeholder="Levi Ackerman" className="w-100" />
          {formErrors['holder_name'] && <small style={{ color: 'red' }}>{formErrors['holder_name']}</small>}
        </div>
        <div class="mb-3">
          <label className="mb-2">Card Number</label>
          <Input placeholder="**** **** **** ****" className="w-100" />
        </div>
        <div className="row">
          <div class="col-6 mb-3">
            <label className="mb-2">Expriration Date</label>
            <Input placeholder="**/****" className="w-100" />
          </div>
          <div class="col-6 mb-3">
            <label className="mb-2">CVV</label>
            <Input placeholder="***" type="password" className="w-100" />
          </div>
        </div>
        <hr className="mb-3" />
        <div className="row">
          <div class="col-6 mb-3">
            <label className="mb-2">Expriration Date</label>
            <Select
              defaultValue="dinein"
              className="ml-auto"
              style={{
                maxWidth: "100%",
              }}
            >
              <Select.Option label="Dine In" value="dinein" />
              <Select.Option label="To Go" value="togo" />
              <Select.Option label="Delivery" value="delivery" />
            </Select>
          </div>
          <div class="col-6 mb-3">
            <label className="mb-2">Table no.</label>
            <Input placeholder="123" type="number" className="w-100" />
          </div>
        </div>

        <div className="row" style={{ marginTop: 'auto' }}>
          <div class="col-6">
            <Button type="button" onClick={hideCheckout} label="Cancel" theme="outline" size="lg" fullWidth />
          </div>
          <div class="col-6">
            <Button label="Confirm Payment" size="lg" fullWidth />
          </div>
        </div>
      </form>
    </div>
  );
}

export { Payment };
