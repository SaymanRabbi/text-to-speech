import React from 'react';

const DubboleButton = () => {
    return (
        <div className='flex gap-6 py-5'>
            <div className=' w-full h-14 text-center   flex justify-center items-center text-black font-bold hover:bg-blue-600 cursor-pointer hover:text-white shadow-lg rounded-md'>
                  Replace
            </div>
            <div className=' w-full h-14 text-center bg-blue-600  flex justify-center items-center text-white font-bold hover:bg-black cursor-pointer rounded-md'>
                  Upload File
            </div>
        </div>
    );
};

export default DubboleButton;