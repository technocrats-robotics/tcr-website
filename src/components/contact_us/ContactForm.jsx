import React, { useState } from "react";

// mail service (email,data) => email as string and data as object
import { sendFeedback } from "../../services/mail/sendEmail.js";

export default function ContactForm() {
  /**
   * to send feedback as email on TCR's official mail id
   * In sendFeeback function send first argument as email(TCR's email in our care)
   * Send argument as object
   *
   * /sendFeeback endpoint on tcr-mail-utility (hosted on heroku) demands the following fields:
   *  1. name
   *  2. email
   *  3. contact
   *  4. message
   *
   * So make sure that these 4 fields should not be null(when someone hits SEND button) to send email successfully.
   *
   */

  // state variabels for input form
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  const [message, setMessage] = useState(null);

  //state variable for message
  const [success, setSuccess] = useState(null);
  const [warning, setWarning] = useState(null);

  // get this from state variables
  const data = {
    name: name,
    email: email,
    contact: contact,
    message: message,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();
    if (name && email && contact && message) {
      let api_msg = await sendFeedback(data);
      if (api_msg) setSuccess("Thank you for submitting your feedback!!");
      else setWarning("Some Error Occured !!");
    } else setWarning("Please fill all the fields !!");
  }

  // this.setState({data:data})
  return (
    <div className="background">
      <div className="container-box">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT US</span>
              </div>
              <div className="app-contact">
                CONTACT INFO : technocratsroboticsvit@gmail.com
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="contactForm__successMessage">{success}</div>
                  <div className="contactForm__warningMessage">{warning}</div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="EMAIL"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      onChange={(event) => setContact(event.target.value)}
                      required
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                      onChange={(event) => setMessage(event.target.value)}
                      required
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button type="submit" className="app-form-button">
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
