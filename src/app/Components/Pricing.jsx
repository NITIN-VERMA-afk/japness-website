import React from 'react'

const Pricing = () => {
  return (
    <div id='pricing'>

<section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Pricing</h1>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="max-w-xs bg-blue-400 shadow-lg rounded-lg overflow-hidden m-4">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold mb-4">Basic</h2>
                <p className="text-gray-700 text-lg mb-4">Access to job listings</p>
                <p className="text-gray-700 text-lg mb-4">Resume assistance</p>
                <p className="text-gray-700 text-lg mb-4">Limited support</p>
                <p className="text-2xl font-bold text-gray-900">$19.99/mo</p>
                <button className="bg-indigo-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded-full">Get Started</button>
              </div>
            </div>
            <div className="max-w-xs bg-blue-500 shadow-lg rounded-lg overflow-hidden m-4">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold mb-4">Standard</h2>
                <p className="text-gray-700 text-lg mb-4">Access to job listings</p>
                <p className="text-gray-700 text-lg mb-4">Resume assistance</p>
                <p className="text-gray-700 text-lg mb-4">Language training</p>
                <p className="text-2xl font-bold text-gray-900">$39.99/mo</p>
                <button className="bg-indigo-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded-full">Get Started</button>
              </div>
            </div>
            <div className="max-w-xs bg-blue-600 shadow-lg rounded-lg overflow-hidden m-4">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold mb-4">Premium</h2>
                <p className="text-gray-700 text-lg mb-4">Access to job listings</p>
                <p className="text-gray-700 text-lg mb-4">Resume assistance</p>
                <p className="text-gray-700 text-lg mb-4">Language training</p>
                
                <p className="text-2xl font-bold text-gray-900">$59.99/mo</p>
                <button className="bg-indigo-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded-full">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Pricing
