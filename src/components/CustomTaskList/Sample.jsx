import React, { useState } from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import './styles.css'; 
import { Theme } from '@twilio-paste/core/theme';



const Sample = (props) => {

const customerData = props?.task?.attributes?.CustomerData;

  
  
const reasonsData = [
  {
    id: 1,
    title: 'Email',
    subReasons: [
      {
        id: 11,
        title: 'Update the Email',
        details: 'check the app version, uninstall and reinstall, clear the cache, check the phone update, if are you able to login to DE web then they should login with same credentials. ',
      },
    ],
  },
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

const [showForm, setShowForm] = useState(false);
const [email,setEmail] = useState(props?.task?.attributes?.CustomerData?.Customer[0]?.emailaddress)
const [changedEmail,setChangedEmail] = useState();
const [updated,setUpdated]= useState(false); 
const [changedParagraph,setChangedParagraph] = useState(); 

  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value);
   
  };
 

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
event.preventDefault();
setEmail(changedEmail);
setShowDetailsPopup(true);
  }

  const handleChange = (event) => {
setChangedEmail(event.target.value);
  }
  
  const handleParagraphChange = (event) => {
    setChangedParagraph(true);
    // You can update the paragraph content here
  };

  const UpdatedParagraphMessage = (event) => {

    setChangedParagraph(true);
    // You can update the paragraph content here
  };

  const clickHandle =() =>{
    setShowDetailsPopup(false);
    setShowForm(false);
    setUpdated(true);
  }


  return (
      <Theme.Provider theme="default">
        {customerData && (
        <div className="container">
          <div className="customer-details">
            <h1>Customer Details</h1>
            <div>
          <p>Customer Name:{props?.task?.attributes?.CustomerData?.Customer[0]?.fullname}</p>
          <p>Customer Email:{email}</p>
          </div>
          </div>
          <div className="dropdowns">
      <select value={selectedReason} onChange={handleReasonChange}>
        <option value="">Select Reason</option>
        {reasonsData.map((reason) => (
          <option key={reason.id} value={reason.title}>
            {reason.title}
          
          </option>
        ))}
      </select>
      {console.log('selectedSubReason',selectedSubReason)}
      {selectedReason && <button onClick={handleClick}>{selectedReason}</button>}
    </div>
   {showForm && <form onSubmit={handleSubmit}>
      <input name="inputBox" type="text"  onChange={handleChange}></input>
       <button className="first" type='submit'>Update</button>
    </form>}
    


    
       {showDetailsPopup && <div>
          {/* Editable paragraph */}
          <p class ="myParagraph" contentEditable={true} onBlur={handleParagraphChange}>
            Thank you for submitting your information!
            We'll be in touch at {email}.
          </p>
          <button class="first" onClick={clickHandle}>Update Notes</button>
        </div>}
        {updated && <div class="myParagraph" onSubmit={UpdatedParagraphMessage}>Updated Notes:Thank you for submitting your information!
            We'll be in touch at {email}. </div> 
            }
 
    <div>

    </div>
        </div>
        )}
      </Theme.Provider>
    );
  };

export default withTaskContext(Sample);
