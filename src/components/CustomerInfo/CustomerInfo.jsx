import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function CustomerInfo() {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    streetAddress: '',
    city: '',
    zip: '',
    deliveryMethod: '',
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_CUSTOMER_INFO',
      payload: customerInfo,
    });
  };

  return (
    <>
      <h1>Step 2: Customer Information</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={customerInfo.name}
          />
          <input
            type="text"
            placeholder="Street Address"
            name="streetAddress"
            onChange={handleChange}
            value={customerInfo.streetAddress}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
            value={customerInfo.city}
          />
          <input
            type="text"
            placeholder="Zip"
            name="zip"
            onChange={handleChange}
            value={customerInfo.zip}
          />
          {/* Radio Button */}

          <input
            type="radio"
            id="pickup"
            name="deliveryMethod"
            value="pickup"
          />
          <label htmlFor="pickup">Pickup</label>

          <input
            type="radio"
            id="delivery"
            name="deliveryMethod"
            value="delivery"
          />
          <label htmlFor="delivery">Delivery</label>

          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
}

export default CustomerInfo;
