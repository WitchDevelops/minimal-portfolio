import React, { useState } from "react";
import { validateEmail } from "./formUtils";
import styles from "./Form.module.css";

function Form() {
  //define variables for the input fields
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [message, setMessage] = useState("");
  const [messageTouched, setMessageTouched] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  //to update the erorr state when user types into the input field
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Check if the new email is valid and clear the error message if it is
    if (validateEmail(newEmail)) {
      setEmailError("");
    }
  };
  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    // Log a message when the form is submitted
  console.log("Form submitted successfully!");

    //clear form fields after submission ans set the submit state to true
    setIsSubmitted(true);
    setName("");
    setNameTouched(false);
    setEmail("");
    setEmailTouched(false);
    setMessage("");
    setMessageTouched(false);
  };

  //allow to show the contact form again after submission
  const handleResetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      {isSubmitted ? (
        <div>
          <p className={styles.success}>
            Your message has been successfully submitted!
          </p>
          <button
            onClick={handleResetForm}
            className={`${styles.button} ${styles.button__text} ${styles.form_button_again}`}
          >
            Submit Another Message
          </button>
        </div>
      ) : (
        <form
          action="https://formbold.com/s/6M7mA"
          method="POST"
          className={styles.form_wrapper}
          onSubmit={handleSubmit}
          novalidate
        >
          <div className={styles.form_group}>
            <label htmlFor="name" className={styles.form_label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jane Appleseed"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setNameTouched(true)}
              className={styles.form_input}
              required
            ></input>
            { nameTouched && name === "" && <p className={styles.error}>This field is required.</p> }
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email" className={styles.form_label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setEmailTouched(true)}
              className={`${styles.form_input} ${
                emailError ? styles.error_input : ""
              }`}
              required
            ></input>
            { emailTouched && email === "" && <p className={styles.error}>This field is required.</p> }
            { emailError && <p className={styles.error}>{emailError}</p> }
          </div>
          <div className={styles.form_group}>
            <label htmlFor="message" className={styles.form_label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="How can I help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => setMessageTouched(true)}
              className={styles.form_input}
              required
            ></textarea>
            { messageTouched && message === "" && <p className={styles.error}>Please enter a message.</p> }
          </div>

          <button
            type="submit"
            className={`${styles.button} ${styles.button__text} ${styles.form_button}`}
          >
            send message
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
