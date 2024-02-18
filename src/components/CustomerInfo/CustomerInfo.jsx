import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function CustomerInfo() {
  const history = useHistory();

  const handleSubmit = () => {
    return;
  };

  return (
    <>
      <h1>Step 2: Customer Information</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Street Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Zip" />
          {/* Radio Button */}
          <button type="submit">Next</button>
        </form>
      </div>
    </>
  );
}

export default CustomerInfo;
