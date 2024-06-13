import React, { useState } from 'react';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., sending data to server
        setSubmitted(true);
    };

    return (
        <div className="contact-container">
            <style>
                {`
                    .contact-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 60vh;
                        background-color: #f2f2f2;
                    }
                    .contact-image {
                        flex: 1;
                        max-width: 36%;
                        padding: 20px;
                    }
                    .contact-image img {
                        width: 100%;
                        border-radius: 10px;
                    }
                    .contact-form-container {
                        flex: 1;
                        max-width: 50%;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                        background-color: #fff;
                    }
                    .form-input {
                        width: 100%;
                        margin-bottom: 20px;
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        font-size: 16px;
                    }
                    .form-input:focus {
                        outline: none;
                        border-color: #007bff;
                    }
                    .form-textarea {
                        width: 100%;
                        height: 150px;
                        margin-bottom: 20px;
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        font-size: 16px;
                        resize: none;
                    }
                    .form-textarea:focus {
                        outline: none;
                        border-color: #007bff;
                    }
                    .form-button {
                        width: 100%;
                        padding: 10px;
                        background-color: red;
                        border: none;
                        border-radius: 5px;
                        color: white;
                        font-size: 16px;
                        cursor: pointer;
                    }
                    .form-button:hover {
                        background-color: #0056b3;
                    }
                    .success-message {
                        color: green;
                        margin-top: 10px;
                    }
                `}
            </style>
            <div className="contact-image">
                <img src="contact-image.jpg" alt="Contact" />
            </div>
            <div className="contact-form-container">
                <h2>Contact Us</h2>
                {submitted && <p className="success-message">Form submitted successfully!</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        className="form-textarea"
                        placeholder="Enter your message"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className="form-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
