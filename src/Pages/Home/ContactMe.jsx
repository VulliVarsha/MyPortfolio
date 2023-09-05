import React, { useState } from 'react';

export default function ContactMe() {
  // Define state variables for each input field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a formData object to send the form data
    const formData = new FormData();
    formData.append('first-name', firstName);
    formData.append('last-name', lastName);
    formData.append('email', email);
    formData.append('phone-number', phoneNumber);
    formData.append('message', message);

    // Add your form submission logic here
    // For example, you can use fetch to send the data to your server
    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint
    try {
      // Send the data to the server
      const response = await fetch('https://getform.io/f/bc61944d-92f5-4053-8de2-64cf0867405a', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle a successful form submission here
        console.log('Form submitted successfully');
        setSubmissionStatus('success'); // Set submission status to success
      } else {
        // Handle errors if the submission fails
        console.error('Form submission failed');
        setSubmissionStatus('error'); // Set submission status to error
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setSubmissionStatus('error'); // Set submission status to error
    }

    // Reset input fields to empty strings after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">Submit the form below to get in touch.</p>
      </div>
      <form
        onSubmit={handleSubmit} // Attach the submit handler to the form
        action="https://getform.io/f/bc61944d-92f5-4053-8de2-64cf0867405a"
        method="POST"
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              value={firstName} // Set the value from state
              onChange={(e) => setFirstName(e.target.value)} // Update state on change
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div>
        {submissionStatus === 'success' && (
        <p className="text-success">Form submitted successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="text-error">Form submission failed. Please try again later.</p>
        )}
     </div>
    </section>
    
    
  );
}
