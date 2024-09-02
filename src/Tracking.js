import React from 'react';

const Tracking = ({ tracking, handleClick }) => {


    return (
        <div className="w-80 p-4 bg-gray-300 border-r border-gray-300 overflow-y-auto">
            <h1 className='font-bold text-center text-3xl pb-5'>History</h1>
            {tracking && tracking.map((item, index) => (
                <div 
                    key={index} 
                    className="bg-white hover:bg-gray-200 transition p-4 mb-4 shadow-md rounded-lg border border-gray-300 cursor-pointer" 
                    onClick={() => handleClick(item.id)}
                >
                    <p className="text-gray-700 font-semibold">{item.question}:</p>
                    <p className="text-white border border-gray-600 bg-slate-600 w-fit px-2 py-1 text-sm rounded-lg ">{item.answer}</p>
                </div>
            ))}
        </div>
    );
}

export default Tracking;
