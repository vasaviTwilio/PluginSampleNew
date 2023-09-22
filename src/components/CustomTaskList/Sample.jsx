import React, { useState } from "react";
import { withTaskContext } from "@twilio/flex-ui";
import "./style.css";
import { Theme } from "@twilio-paste/core/theme";

const Sample = (props) => {
  const customerData = props?.task?.attributes?.CustomerData;

  const reasonsData = [
    {
      id: 1,
      title: "Change Email",
      subReasons: [
        {
          id: 11,
          title: "Update the Email",
          details:
            "check the app version, uninstall and reinstall, clear the cache, check the phone update, if are you able to login to DE web then they should login with same credentials. ",
        },
      ],
    },
    {
      id: 1,
      title: "Pre Authorized Debit",
      subReasons: [
        {
          id: 11,
          title: "Update the Pre Authorized Debit",
          details:
            "check the app version, uninstall and reinstall, clear the cache, check the phone update, if are you able to login to DE web then they should login with same credentials. ",
        },
      ],
    },
    {
      id: 2,
      title: "Address Change",
      subReasons: [
        {
          id: 21,
          title: "Update the Address Change",
          details: "Details about Sub-Reason 2.1...",
        },
      ],
    },
    {
      id: 3,
      title: "Increase Credit Limit",
      subReasons: [
        {
          id: 31,
          title: "Update Increase Credit Limit",
          details: "Details about Sub-Reason 2.1...",
        },
      ],
    },
    {
      id: 4,
      title: "Mobile Number Change",
      subReasons: [
        {
          id: 41,
          title: "Update Mobile Number Change",
          details: "Details about Sub-Reason 2.1...",
        },
      ],
    },
  ];

  const [selectedReason, setSelectedReason] = useState(null);
  const [selectedSubReason, setSelectedSubReason] = useState(null);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState(
    props?.task?.attributes?.CustomerData?.Customer[0]?.emailaddress
  );
  const [address, setAddress] = useState(
    props?.task?.attributes?.CustomerData?.Customer[0]?.Address
  );

  const [phone, setPhone] = useState(
    props?.task?.attributes?.CustomerData?.Customer[0]?.Mobilenumber
  );
  const [changedItem, setChangedItem] = useState();
  const [updated, setUpdated] = useState(false);
  const [changedParagraph, setChangedParagraph] = useState();

  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value);
    setShowDetailsPopup(false);
    setChangedParagraph(false);
    setUpdated(false);
    setShowForm(false);
  };

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedReason === "Change Email") {
      setEmail(changedItem);
      setShowDetailsPopup(true);
      setChangedParagraph(`Thank you for submitting your information!
We'll be in touch at ${changedItem}`);
    } else if (selectedReason === "Address Change") {
      setAddress(changedItem);
      setShowDetailsPopup(true);
      setChangedParagraph(`Thank you for submitting your information!
We'll be in touch at ${changedItem}`);
    } else if (selectedReason === "Mobile Number Change") {
      setPhone(changedItem);
      setShowDetailsPopup(true);
      setChangedParagraph(`Thank you for submitting your information!
We'll be in touch at ${changedItem}`);
    }
  };

  const handleChange = (event) => {
    setChangedItem(event.target.value);
  };

  const handleParagraphChange = (event) => {
    setChangedParagraph(event.target.outerText);
    // setChangedParagraph(true);

    // You can update the paragraph content here
  };

  const UpdatedParagraphMessage = (event) => {
    setChangedParagraph(event.target.value);
    // You can update the paragraph content here
  };

  const clickHandle = () => {
    setShowDetailsPopup(false);
    setShowForm(false);
    setUpdated(true);
  };

  return (
    <Theme.Provider theme="default">
      {customerData && (
        <div className="customerWrapper">
          <span className="customerHeading">Customer Info</span>
          <hr />
          <div className="innerWrapper">
            <div className="fullName">{customerData.Customer[0].fullname}</div>
            <div className="detailsWrapper">
              <div>
                <div className="detWrap">
                  <div className="detailshead">
                    <div className="Emailhead">{"CUSTOMER STATUS"}</div>
                    <div className="Email">{"VIP"}</div>
                  </div>
                  <div className="details">
                    <div className="phonehead">{"ADDRESS"}</div>
                    <div className="phone">{address}</div>
                  </div>
                </div>
                <div className="detWrap">
                  <div className="detailshead">
                    <div className="Emailhead">{"EMAIL"}</div>
                    <div className="Email">{email}</div>
                  </div>
                  <div className="details">
                    <div className="phonehead">{"PHONE"}</div>
                    <div className="phone">{phone}</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="profilePhoto"
                  alt="Ellipse"
                  src="https://t3.ftcdn.net/jpg/01/42/73/54/360_F_142735441_G2cltxhDKFFLcv6gz0LsBvyrNxZqWE3c.jpg"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="dropdowns">
            <select
              className="dropdown"
              value={selectedReason}
              onChange={handleReasonChange}
            >
              <option value="">Select Reason</option>
              {reasonsData.map((reason) => (
                <option key={reason.id} value={reason.title}>
                  {reason.title}
                </option>
              ))}
            </select>
            {selectedReason && (
              <button className="buttonreason" onClick={handleClick}>
                {selectedReason}
              </button>
            )}
          </div>
          {showForm && (
            <form onSubmit={handleSubmit} className="form">
              <input
                name="inputBox"
                className="boxes"
                type="text"
                onChange={handleChange}
              ></input>
              <button className="firstButton" type="submit">
                Update
              </button>
            </form>
          )}
          {showDetailsPopup && (
            <div className="arrange">
              <div
                contentEditable={true}
                name="input"
                type="text"
                className="editablePara"
                onBlur={handleParagraphChange}
              >
                {changedParagraph}
              </div>
              <div></div>
              <button className="first" onClick={clickHandle}>
                Update Notes
              </button>
            </div>
          )}
          {updated && (
            <div className="editablePara" onSubmit={UpdatedParagraphMessage}>
              {changedParagraph}
            </div>
          )}
          <div></div>
        </div>
      )}
    </Theme.Provider>
  );
};

export default withTaskContext(Sample);
