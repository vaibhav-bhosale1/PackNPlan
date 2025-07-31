import React from 'react'

const Footer = () => {
  return (
   <div className="mt-16 py-8 border-t border-gray-200">
      <div className="text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-xl border border-gray-200">
          <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <span className="text-gray-600 font-medium">
            Created by <span className="text-gray-900 font-semibold">Vaibhav Bhosale's packNplan</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer