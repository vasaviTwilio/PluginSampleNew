import React, { useState } from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import { Theme } from '@twilio-paste/core/theme';
import './styles.css';

const SampleAddress = (props) => {

const customerData = props?.task?.attributes?.CustomerData;
const reasonsData = [
  {
    id: 1,
    title: 'Pre Authorized Debit',
    subReasons: [
      {
        id: 11,
        title: 'Update the Pre Authorized Debit',
        details: 'check the app version, uninstall and reinstall, clear the cache, check the phone update, if are you able to login to DE web then they should login with same credentials. ',
      },
    ],
  },
  {
    id: 2,
    title: 'Address Change',
    subReasons: [
      {
        id: 21,
        title: 'Update the Address Change',
        details: 'Details about Sub-Reason 2.1...',
      },
    ],
  },
  {
    id: 3,
    title: 'Increase Credit Limit',
    subReasons: [
      {
        id: 31,
        title: 'Update Increase Credit Limit',
        details: 'Details about Sub-Reason 2.1...',
      },
    ],
  },
  {
    id: 4,
    title: 'Mobile Number Change',
    subReasons: [
      {
        id: 41,
        title: 'Update Mobile Number Change',
        details: 'Details about Sub-Reason 2.1...',
      },
    ],
  },
];

const [selectedReason, setSelectedReason] = useState(null);
const [selectedSubReason, setSelectedSubReason] = useState(null);
const [showDetailsPopup, setShowDetailsPopup] = useState(false);

const handleReasonChange = (event) => {
  setSelectedReason(event.target.value);
  setSelectedSubReason(null);
};

const handleSubReasonChange = (event) => {
  setSelectedSubReason(event.target.value);
  setShowDetailsPopup(true);
};

const closePopup = () => {
  setShowDetailsPopup(false);
};

const [showEditableParagraph, setShowEditableParagraph] = useState(false);

const handleCustomerFormSubmit = (event) => {
  event.preventDefault();
  setShowEditableParagraph(true);
};


return (
<Theme.Provider theme="default">
{customerData && (
    <div className="container">
      <div className="customer-details">
        <p>Customer Information</p>
        <p>{props?.task?.attributes?.CustomerData?.Customer[0]?.fullname}</p>
        <p>{props?.task?.attributes?.CustomerData?.Customer[0]?.emailaddress}</p>
      </div>
      <div className="dropdowns">
      <select value={selectedReason} onChange={handleReasonChange}>
        <option value="">Select Reason</option>
        {reasonsData.map((reason) => (
          <option key={reason.id} value={reason.id}>
            {reason.title}
          </option>
        ))}
      </select>
      
      {selectedReason && (
        <div>
          <select value={selectedSubReason} onChange={handleSubReasonChange}>
            <option value="">Select Sub-Reason</option>
            {reasonsData.find((reason) => reason.id === parseInt(selectedReason)).subReasons.map((subReason) => (
              <option key={subReason.id} value={subReason.id}>
                {subReason.title}
              </option>
            ))}
          </select>
          
          {showDetailsPopup && selectedSubReason && (
            <div className="popup">
              <p>{reasonsData.find((reason) => reason.id === parseInt(selectedReason)).subReasons.find((subReason) => subReason.id === parseInt(selectedSubReason)).details}</p>
              <button onClick={closePopup}>Close</button>
              <div style={{ marginTop: '20px' }}>
                <p>If issue not resolved with above recommendation. Please submit a ticket.</p>
                <button onClick={handleCustomerFormSubmit}>Submit a ticket</button>
                {showEditableParagraph && <p style={{ color: 'green' }}>Jira ticket created successfully!</p>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    <div>

    </div>
    </div>
)}
</Theme.Provider>
);
};

export default withTaskContext(SampleAddress);
