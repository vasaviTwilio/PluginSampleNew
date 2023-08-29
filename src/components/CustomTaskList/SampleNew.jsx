import React, { useState } from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import './styles.css'; 
import { Theme } from '@twilio-paste/core/theme';


const SampleNew = (props) => {

  const jsonData = props?.task?.attributes?.CustomerDetails;
  
  const reasonsData = [
    {
      id: 1,
      title: 'Pre Authorized Debit'
    },
    {
      id: 2,
      title: 'Address Change'
      
    },
    {
      id: 3,
      title: 'Increased Credit Limit'
    },
    {
      id: 4,
      title: 'Mobile Number Change'
    },
    {
      id: 5,
      title: 'Email Address'
    },
  ];


const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    this.setState({
        selectedOption,
        showSubmitButton: true
    });
}


  return (
      <Theme.Provider theme="default">
        {jsonData && (
        <div className="container">
          <div className="customer-details">
            <h1>Customer Details</h1>
            <p>{props?.task?.attributes?.fullname}</p>
            <p>{props?.task?.attributes?.emailaddress}</p>
          </div>
          <div className="dropdowns">
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select Reason</option>
        {reasonsData.map((reason) => (
          <option key={reason.id} value={reason.id}>
            {reason.title}
          </option>
        ))}
      </select>

      {showSubmitButton && (
                    <button onClick={this.handleSubmit}>Submit</button>
                )}
      
    </div>

    <div>

</div>
        </div>
        )}
      </Theme.Provider>
    );
  };

export default withTaskContext(SampleNew);
