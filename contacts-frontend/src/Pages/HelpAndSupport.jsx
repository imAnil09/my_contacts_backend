// HelpSupportPage.js

import React, { useState } from 'react';

const HelpAndSupport = () => {
    const [message, setMessage] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
    // Customize the message you want to pre-fill
  const preFilledMessage = message;

  // Encode the message for a URL
  const encodedMessage = encodeURIComponent(preFilledMessage);

  // Use `window.open` to open the user's default email client with a pre-filled message
  window.open(`mailto:bosianil09@gmail.com?subject=Support Request&body=${encodedMessage}`, '_blank');
      };
    
      return (
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Help and Support</h1>
    
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p>
              Welcome to our Help and Support page. If you have any questions or issues, please feel free to
              reach out to us.
            </p>
          </div>
    
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">FAQs</h2>
            <ul className="list-disc pl-6">
              <li>How do I reset my password?</li>
              <li>What are the supported payment methods?</li>
              <li>How can I track my order?</li>
            </ul>
          </div>
    
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleFormSubmit} className="max-w-md">
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      );
};

export default HelpAndSupport;
