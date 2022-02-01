import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./Contact.css";
const SentMessageBox = () => {
  return (
    <div className="sent-message-box">
      Message Sent! <i class="fas fa-check-circle"></i>
    </div>
  );
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      contactNumber: "",
      message: "",
      hasSent: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(
      {
        name: "",
        contactNumber: "",
        message: "",
        hasSent: true,
      },
      () => {
        setTimeout(() => {
          this.setState({ hasSent: false });
        }, 2000);
      }
    );
  }
  render() {
    const { hasSent } = this.state;

    return (
      <div id="contact">
        <div className="content-title">
          <h1> Contact Me </h1>
        </div>

        <div className="contact-wrapper contact-info">
          <div>
            <ul>
              <h3>
                <FaPhone /> Phone
              </h3>
              <span>+1 672 514 8258</span>
            </ul>
            <ul>
              <h3>
                <FaEnvelope /> Email Address
              </h3>
              <span>hihailey96@gmail.com</span>
            </ul>
            <ul>
              <h3>
                <FaMapMarkerAlt /> Address
              </h3>
              <span>Vancouver, BC, Canada</span>
            </ul>
          </div>
          <div className="contact-detail">
            {hasSent ? (
              <SentMessageBox />
            ) : (
              <form
                className="contact-form-container"
                onSubmit={this.handleSubmit}
              >
                <input
                  type="text"
                  value={this.state.name}
                  placeholder="Full Name"
                  name="name"
                  className="contact-input"
                  onChange={this.handleChange}
                  required
                />

                <input
                  type="text"
                  value={this.state.contactNumber}
                  placeholder="Telephone Number"
                  className="contact-input"
                  name="contactNumber"
                  onChange={this.handleChange}
                  required
                />

                <input
                  type="text"
                  value={this.state.contactNumber}
                  placeholder="Email"
                  className="contact-input"
                  name="contactNumber"
                  onChange={this.handleChange}
                  required
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={this.state.message}
                  className="contact-input"
                  onChange={this.handleChange}
                  required
                />

                <button className="button submit-button" value="Submit">
                  Send!
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
