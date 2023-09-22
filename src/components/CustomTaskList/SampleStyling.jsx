import React, { useState, useEffect } from "react";

import io from "socket.io-client";

import { withTaskContext } from "@twilio/flex-ui";

import { Theme } from "@twilio-paste/core/theme";

import "./sample.css";

//import "./styles.css"

 

const DocumentViewer = (props) => {

  const customerData = props?.task?.attributes?.CustomerData;

  const [documents, setDocuments] = useState([]);

  const [isMessageSent, setMessageSent] = useState(false);

  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const [isUploadSuccess, setUploadSuccess] = useState(false);

  const [sendOption, setSendOption] = useState("sms");

 

  const handleSendOptionChange = (event) => {

    setSendOption(event.target.value);

  };

  

  const handleSend = () => {

    if (sendOption === "sms") {

      handleSendSMS();

    } else if (sendOption === "email") {

      handleSendEmail();

    }

  };

  const handleSendSMS = async () => {

    try {

      const response = await fetch("https://ashish-5111.twil.io/padserver", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          link: "http://localhost:3001/",

        }),

      });

 

      if (response.ok) {

        console.log("SMS sent successfully");

        setMessageSent(true);

      } else {

        console.error("Failed to send SMS");

      }

    } catch (error) {

      console.error("Error sending SMS:", error);

    }

  };

 

  const handleSendEmail = async () => {

    try {

      const response = await fetch("https://ashish-5111.twil.io/padserver", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          link: "http://localhost:3001/",

        }),

      });

  

      if (response.ok) {

        console.log("Email sent successfully");

        setMessageSent(true);

      } else {

        console.error("Failed to send email");

      }

    } catch (error) {

      console.error("Error sending email:", error);

    }

  };

 

  const handleCheckboxChange = () => {

    setCheckboxChecked(!isCheckboxChecked);

  };

 

  // Function to upload data to the database

  const uploadToDatabase = async () => {

    if (isCheckboxChecked) {

      const documentData = documents[0];

      const documentDataBinary = btoa(documentData);

      const customerName = props?.task?.attributes?.CustomerData?.Customer[0]?.fullname;

 

      try {

        const response = await fetch("http://localhost:3004/upload", {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },

          body: JSON.stringify({

            documentData: documentDataBinary,

            customerName,

          }),

        });

 

        if (response.ok) {

          console.log("Document uploaded to the database");

          setUploadSuccess(true);

        } else {

          console.error("Failed to upload document to the database");

        }

      } catch (error) {

        console.error("Error uploading document to the database:", error);

      }

    }

  };

 

  useEffect(() => {

    const socket = io("http://localhost:3000");

 

    socket.on("newDocument", (documentData) => {

      setDocuments([documentData]);

    });

 

    return () => {

      socket.disconnect();

    };

  }, []);

 

  return (

    <Theme.Provider theme="default">

        <div className="index">

          <div className="frame-1">

            <div className="frame-2">

              <div className="frame-3">

                <p className="CUSTOMER-INFO">CUSTOMER INFO</p>

              </div>

              <hr className="line-0" />

              <hr className="line-1" />

            </div>

            <div className="frame-5">

              <div className="frame-6">

                <p className="customer-fullname">

                  {props?.task?.attributes?.CustomerData?.Customer[0]?.fullname}

                </p>

                <div className="frame-7">

                  <div className="frame-8">

                    <div className="frame-9">

                      <p className="details-heading">CUSTOMER STATUS</p>

                      <p className="details">

                        {

                          props?.task?.attributes?.CustomerData?.Customer[0]

                            ?.customerstatus

                        }

                      </p>

                    </div>

                    <div className="frame-10">

                      <p className="details-heading">EMAIL</p>

                      <p className="customer-email">

                        {

                          props?.task?.attributes?.CustomerData?.Customer[0]

                            ?.emailaddress

                        }

                      </p>

                    </div>

                  </div>

                  <div className="frame-11">

                    <div className="frame-12">

                      <p className="details-heading">ADDRESS</p>

                      <p className="customer-address">

                        {

                          props?.task?.attributes?.CustomerData?.Customer[0]

                            ?.address

                        }

                      </p>

                    </div>

                    <div className="frame-13">

                      <p className="details-heading">PHONE</p>

                      <p className="details">

                        {

                          props?.task?.attributes?.CustomerData?.Customer[0]

                            ?.phonenumber

                        }

                      </p>

                    </div>

                  </div>

                </div>

              </div>

             

            </div>

          </div>

          <div>

          <hr className="line-2" />

          </div>

          <div className="instructions-paragraph">

            <p>To send Pre-Authorized Debit instructions, please select the messaging channel.</p>

          </div>

          <div className="button-container">

            <select onChange={handleSendOptionChange} className="send-option-dropdown">

              <option value="sms">Send SMS</option>

              <option value="email">Send Email</option>

            </select>

            <button onClick={handleSend} className="send-button">

              Send

            </button>

          </div>

          {isMessageSent && (

            <div className="confirmation-message-instructions">

              Instructions sent successfully!

            </div>

          )}

          {documents.length > 0 && (

            <div className="customer-documents">

              <h2>CUSTOMER UPLOADS</h2>

              <div id="document-container">

                {documents.map((documentData, index) => (

                  <div key={index}>

                    <div style={{ marginTop: "10px" }} />

                    <embed

                      src={`data:application/pdf;base64,${documentData}`}

                      type="application/pdf"

                      width="100%"

                      height="700px"

                    />

                  </div>

                ))}

              </div>

              <div className="verification-container">

                <input

                  type="checkbox"

                  id="verification-checkbox"

                  onChange={handleCheckboxChange}

                />

                <label htmlFor="verification-checkbox" className="verification-label">Document Verified</label>

                {isCheckboxChecked && (

                  <button onClick={uploadToDatabase} className="upload-button">

                    Upload to Database

                  </button>

                )}

                {isUploadSuccess && (

                  <div className="confirmation-message">

                    Document uploaded to the database successfully!

                  </div>

                )}

              </div>

            </div>

          )}

          <div className="button-container-2">

            <p>Thanks for reaching out to Rogers support!</p>

          </div>

        </div>

    </Theme.Provider>

  );

};

 

export default withTaskContext(DocumentViewer);