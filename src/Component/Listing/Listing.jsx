import React from 'react';
import "./Listing.css";

const Listing = () => {
  return (
<div className='flex flex-1 justify-between mt-2 shadow-lg p-3 parent'>
    
    <div className="flex btn1">
        <button className="mr-2 border px-4 py-1 text-gray-900 rounded-3xl bg-gray-100">Location</button>
        <button className="mr-2 border px-4 py-1 text-gray-900 rounded-3xl bg-gray-100">Category</button>
        <button className="mr-2 border px-4 py-1 text-gray-900 rounded-3xl bg-gray-100 date">Dates</button>
    </div>
    <div className="flex btn2">
        <button className='border px-4 py-1 text-gray-100 rounded-3xl bg-orange-500 relevant'>Relevant</button>
        <button className='border px-4 py-1 text-gray-100 rounded-3xl bg-orange-500 most'>Most Relevant First</button>
    </div>
</div>


  )
}

export default Listing;
