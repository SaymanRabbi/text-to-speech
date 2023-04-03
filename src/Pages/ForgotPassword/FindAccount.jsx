import React from 'react';
import { Link } from 'react-router-dom';

const FindAccount = ({setTest}) => {
    return (
        <div className=' h-[80vh] flex justify-center items-center px-3'>
            <div className='p-4 w-[570px] shadow-lg rounded-md bg-[#FFFFFF]'>
                  <h1 className='text-2xl'>Find Your Account</h1>
                  <hr  className='my-4'/>
                  <p>
                  Please enter your email address or mobile number to search for your account.
                  </p>
                  <div className='flex justify-center items-center'>
                        <input type="text" className=' w-[60%] border-2 border-gray-300 rounded-md p-3 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Email or Mobile Number...'/>
                  </div>
                  <hr  className='my-4'/>
                  <div className=' flex justify-end items-center gap-4'>
                           <Link to='/login' className='py-2 px-5 font-medium rounded-md bg-gray-300'>
                            Cancel
                           </Link>
                           <button className='py-2 px-5 font-medium rounded-md bg-blue-600 text-white' onClick={()=>setTest(1)}>
                            Search
                           </button>
                  </div>
            </div>
        </div>
    );
};

export default FindAccount;