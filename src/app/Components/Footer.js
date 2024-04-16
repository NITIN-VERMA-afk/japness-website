import React from 'react'

const Footer = () => {
  return (
    <div id='footer'>
        <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-4">
    <div className="container mx-auto text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} nitin verma. All Rights Reserved.</p>
    </div>
  </footer>
      
    </div>
  )
}

export default Footer


