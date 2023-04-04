import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';


const ResetPass = ({user}) => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail( auth);
    const navigate = useNavigate()
    const resetPassFunc =async () => {
            await sendPasswordResetEmail(user?.email)
             toast.success('Reset Password Link Sent Successfully')
             setTimeout(() => {
                navigate('/login')
             }, 2000);
    }
    return (
        <div className=' h-[85vh] flex justify-center items-center px-3'>
        <div className='p-4 w-[570px] shadow-lg rounded-md bg-[#FFFFFF]'>
              <h1 className='text-2xl'>Reset Your Password</h1>
              <hr  className='my-6'/>
              <div className='grid grid-cols-2'>
                   <div className=' w-full'>
                    <p className=' text-gray-600'>How do you want to receive the code to reset your password?</p>
                    <div className=' flex items-center'>
                        <input type="radio" name='reset' id='reset1' className='mr-2' defaultChecked/>
                         <div>
                            <p className='block text-sm text-gray-600'>Send code via email</p>
                            <p className=' block text-sm text-gray-600'>{user?.email}</p>
                         </div>
                     </div>
                   </div>
                   <div className=' w-full flex justify-center'>
                       <div className=' flex flex-col justify-center items-center'>
                       <div className=' w-20 h-20 rounded-full border-2 border-blue-600 flex items-center justify-center'>
                       <FontAwesomeIcon icon={faUser} className='text-4xl text-blue-600'/>
                       </div>
                       <p className=' text-sm text-gray-600 mt-2'>{user?.email}</p>
                       </div>
                   </div>
              </div>
              <hr  className='my-6'/>
              <div className=' flex justify-end items-center gap-4'>
                       <Link to='/login' className='py-2 px-5 font-medium rounded-md bg-gray-300'>
                        Not You?
                       </Link>
                       <button className='py-2 px-5 font-medium rounded-md bg-blue-600 text-white' onClick={()=>resetPassFunc()}>
                        Continue
                       </button>
              </div>
        </div>
    </div>
    );
};

export default ResetPass;