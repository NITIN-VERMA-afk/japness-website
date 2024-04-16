import React from 'react';

const ContactUs = () => {
  return (
    <div id='contact' className=" min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium text-gray-900">Name</label>
                <input placeholder='enter your name' type="text" id="name" name="name" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium text-gray-900">Email</label>
                <input placeholder='enter your email' type="email" id="email" name="email" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium text-gray-900">Message</label>
                <textarea  placeholder='enter your text' id="message" name="message" rows="4" className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out w-full">Send Message</button>
            </form>
          </div>
          <div className=" rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg mb-2">Address: WORKO</p>
            <p className="text-lg mb-2">Phone: 987654321</p>
            <p className="text-lg">Email: somewhere in Japan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;

