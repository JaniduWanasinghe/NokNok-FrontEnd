import React, { useState } from 'react';

const ContactUs = () => {
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    console.log('Form submitted:', message);
    // You can reset the form or show a success message if needed
    setMessage('');
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Feel free to reach out to us for any inquiries or assistance. Our team is here to help you!
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Address:</strong> 1234 Dummy Street, Cityville, Country
            </p>
            <p className="text-lg leading-relaxed mb-6">
              <strong>Email:</strong> info@noknok.com
            </p>
          </div>

          <div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
