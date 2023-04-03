import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons';

const ChangesPass = () => {
    // --------navigator-------
    const navigate = useNavigate()
    // --------navigator-------
    // ------pass change------
    const [pass,setPass] = useState('')
    const [confirmPass,setConfirmPass] = useState('')
    const [error,setError] = useState('')
    // ------show pass------
    const [showPass,setShowPass] = useState(false)
    const [showPass1,setShowPass1] = useState(false)
    // ------show pass------
    const passwordChange = () => {
        if(pass !== confirmPass){
            setError('Password not match')
        }if(pass ==='' || confirmPass ===''){
            setError('Password is required')
    }
    else{
        setError('')
        // setup func here 
        navigate('/login')
        // ------pass change------
    }
}

    return (
        <div className=' h-[85vh] flex justify-center items-center px-3'>
        <div className='p-4 w-[570px] shadow-lg rounded-md bg-[#FFFFFF]'>
              <h1 className='text-2xl'>Code verification</h1>
              <hr  className='my-4'/>
              <p>
              Pick a strong password
              </p>
             <form onSubmit={(e)=>e.preventDefault()}>
            {/* ===========password========= */}
            <div className='flex justify-center items-center mt-3 relative'>
                    <input type={`${showPass?'text':'password'}`} className={`w-[70%] border-2 border-gray-300 rounded-md p-3 mt-2 outline-none  ${error ||pass !== confirmPass ?'border-red-500':'focus:border-blue-500'} bg-[#F9FAFB]`}  placeholder='New Password' onChange={(e)=>setPass(e.target.value)} required/>
                    <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} className='absolute right-[17%] top-6 text-gray-400 cursor-pointer' onClick={()=>setShowPass(!showPass)}/>
              </div>
            {/* ===========password========= */}
             {/* ==========Reset Pass======= */}
             <div className='flex justify-center items-center mt-3 relative'>
              <input type={`${showPass1?'text':'password'}`} className={`w-[70%] border-2 border-gray-300 rounded-md p-3 mt-2 outline-none  ${error ||pass !== confirmPass ?'border-red-500':'focus:border-blue-500'} bg-[#F9FAFB]`}  placeholder='New Password' onChange={(e)=>setConfirmPass(e.target.value)} required/>
                    <FontAwesomeIcon icon={showPass1 ? faEye : faEyeSlash} className='absolute right-[17%] top-6 text-gray-400 cursor-pointer' onClick={()=>setShowPass1(!showPass1)}/>
              </div>
             {/* ==========Reset Pass======= */}
              <hr  className='my-4'/>
              <div className=' flex justify-end items-center gap-4'>
                       <Link to='/login' className='py-2 px-5 font-medium rounded-md bg-gray-300'>
                        Cancel
                       </Link>
                       <button className='py-2 px-5 font-medium rounded-md bg-blue-600 text-white' onClick={()=>passwordChange()}>
                        Continue
                       </button>
              </div>
             </form>
        </div>
    </div>
    );
};

export default ChangesPass;