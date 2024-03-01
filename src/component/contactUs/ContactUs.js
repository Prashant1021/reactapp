import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to a server)
    console.log('Form submitted:', formData);
    // You can add your logic here to send the form data to the server or perform other actions.
    
    // Display a confirmation message
    setIsFormSubmitted(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Contact Us" style={{ width: 400, backgroundColor: '', padding: '20px', borderRadius: '8px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              required
            ></textarea>
          </div>
          <button type="submit" style={{ backgroundColor: 'cyan', borderRadius: '4px', padding: '8px', marginLeft: '130px' }}>
            Submit
          </button>
        </form>
        {isFormSubmitted && (
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <p style={{ color: 'green', fontWeight: 'bold' }}>Form submitted successfully!</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ContactUs;
