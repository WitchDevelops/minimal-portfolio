import React, { useState } from 'react';
import styles from './Form.module.css';

function Form() {
    //define variables for the input fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        
        

        //clear form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form className={styles.form_wrapper} onSubmit={handleSubmit}>
            <div className={styles.form_group}>
               <label htmlFor="name" className={styles.form_label}>Name</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Appleseed"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.form_input}
                required
                >
            </input> 
            </div>
            <div className={styles.form_group}>
               <label htmlFor="email" className={styles.form_label}>Email Address</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.form_input}
                required
                >
            </input> 
            </div>
            <div className={styles.form_group}>
               <label htmlFor="message" className={styles.form_label}>Message</label>
            <textarea 
                id="message"
                name="message"
                placeholder="How can I help?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.form_input}
                required
                >

            </textarea> 
            </div>
            
            <button type="submit" className={`${styles.button} ${styles.button__text} ${styles.form_button}`}>send message</button>
        </form>
    )
}

export default Form;