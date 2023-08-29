import React, { useState } from 'react';

function CustomerManagement() {
  const [showEditableParagraph, setShowEditableParagraph] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
  });

  
  const handleCustomerFormSubmit = (event) => {
    event.preventDefault();
    setShowEditableParagraph(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleParagraphChange = (event) => {
    // You can update the paragraph content here
  };

  return (
    <div>
      <h2>Customer Information</h2>
      {!showEditableParagraph ? (
        <div>
          <form onSubmit={handleCustomerFormSubmit}>
            {/* Customer information form fields */}
         
            <input
              type="email"
              name="email"
              value={customerInfo.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            {/* Add other fields here */}
            <button type="submit">Submit Updated Email</button>
          </form>
        </div>
      ) : (
        <div>
          {/* Editable paragraph */}
          <p contentEditable={true} onBlur={handleParagraphChange}>
            Thank you, {customerInfo.name}, for submitting your information!
            We'll be in touch at {customerInfo.email}.
          </p>
        </div>
      )}
    </div>
  );
}

export default CustomerManagement;
