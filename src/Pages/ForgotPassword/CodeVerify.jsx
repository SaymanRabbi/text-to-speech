import React from 'react';
import { Link } from 'react-router-dom';

const CodeVerify = ({setTest}) => {
    return (
        <div className=' h-[85vh] flex justify-center items-center px-3'>
        <div className='p-4 w-[570px] shadow-lg rounded-md bg-[#FFFFFF]'>
              <h1 className='text-2xl'>Code verification</h1>
              <hr  className='my-4'/>
              <p>
              Please enter code that been sent to your email.
              </p>
              <div className='flex justify-center items-center mt-3'>
                    <input type="text" className=' w-[70%] border-2 border-gray-300 rounded-md p-3 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Code...'/>
              </div>
              <hr  className='my-4'/>
              <div className=' flex justify-end items-center gap-4'>
                       <Link to='/login' className='py-2 px-5 font-medium rounded-md bg-gray-300'>
                        Cancel
                       </Link>
                       <button className='py-2 px-5 font-medium rounded-md bg-blue-600 text-white' onClick={()=>setTest(1)}>
                        Continue
                       </button>
              </div>
        </div>
    </div>
    );
};

export default CodeVerify;