import React, { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  //define variables for the input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  //email validation
  const validateEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };
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
        setEmailError('Please enter a valid email address.');
        return;
      }
    //TODO form submisstion logic

    //clear form fields after submission ans set the submit state to true
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  //allow to show the contact form again after submission
  const handleResetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
        {isSubmitted ? (
            <div>
                <p className={styles.success}>Your message has been successfully submitted!</p>
                <button
              onClick={handleResetForm}
              className={`${styles.button} ${styles.button__text} ${styles.form_button_again}`}
            >
              Submit Another Message
            </button>
            </div>
        ) : (
            <form className={styles.form_wrapper} onSubmit={handleSubmit}>
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
          className={styles.form_input}
          required
        ></input>
      </div>
      <div className={styles.form_group}>
        <label htmlFor="email" className={styles.form_label}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
          placeholder="email@example.com"
          value={email}
          onChange={handleEmailChange}
          className={`${styles.form_input} ${emailError ? styles.error_input : ''}`}
          required
        ></input>
        {emailError && <p className={styles.error}>{emailError}</p>}
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
          className={styles.form_input}
          required
        ></textarea>
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
