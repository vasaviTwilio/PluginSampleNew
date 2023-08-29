
import React, { useState } from 'react';

function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Submitted:', name, email);
  };

  return (
    <div>
      <h2>Form Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        </form>
        (
        <div>
          {/* Render the new paragraph here */}
          <p>
            Thank you, {customerInfo.name}, for submitting your information!
            We'll be in touch at {customerInfo.email}.
          </p>
        </div>
      )
     
    </div>
  );
}

export default FormComponent;