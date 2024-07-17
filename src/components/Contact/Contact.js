import React, { useState } from 'react';
import './Contact.css';
import emailicon from '../../images/email.png';
import addressicon from '../../images/address.png';
import phoneicon from '../../images/phoneno.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        setSubmitted(true);

        // Reset the form data if needed
        setFormData({
            name: '',
            email: '',
            website: '',
            message: ''
        });

        // Clear the success message after 5 seconds
        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
    };

    return (
        <div className='both-wrapper'>
            <div className='filter-bx'>
                <div className='contact-box-content'>
                    <div className='top-content'>
                        <h1>Contact us</h1>
                        <p>We are committed to processing the information in order to contact you and talk about your project.</p>
                    </div>
                    <div className='bottom-box'>
                        <ul>
                            <li><span className='icon'><img src={emailicon} className="email-icon" alt="logo" /></span><a href='mailto:example@teamwebflow.com'>example@teamwebflow.com</a></li>
                            <li><span className='icon'><img src={addressicon} className="Address-icon" alt="logo" /></span>4040 Lekki Summit Suite 402
                                Lake Manchester City</li>
                            <li><span className='icon'><img src={phoneicon} className="phone-icon" alt="logo" /></span><a href="tel:+44 123 777 5401">+44 123 777 5401</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact-form-container">
                    {submitted && (
                        <div className="success-message">
                            Thank you for your message! We will get back to you soon.
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="required"></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="required"></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="website" className="required"></label>
                            <input
                                type="url"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="website"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
