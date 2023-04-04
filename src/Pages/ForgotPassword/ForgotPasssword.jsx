import React from 'react';
import FindAccount from './FindAccount';
import CopyRight from '../AudioResult/CopyRight';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import { useState } from 'react';
import ResetPass from './ResetPass';
import CodeVerify from './CodeVerify';
import ChangesPass from './ChangesPass';
const ForgotPasssword = () => {
    const [test,setTest] = useState(0)
    const [user,setUser] = useState()
    console.log(user)
    return (
        <div className=' bg-[#F0F2F5]'>
            {/* ------header-------- */}
            <div className='h-[85px] top-0 w-full p-3 flex justify-between items-center shadow-lg bg-[#FFFFFF]'>
             <Link to={'/'}>
             <img src={logo} alt="" className=' w-28 h-full' />
             </Link>  
            {/* ------header-------- */}
              <Link to='/login' className='py-2 px-5 font-medium rounded-md bg-blue-600 text-white'>
                            Login
                           </Link>
            </div>
            {
                test === 0?<FindAccount setUser={setUser} user={user} setTest={setTest}/> : test === 1?<ResetPass user={user} setTest={setTest}/> : null
            }
            <CopyRight/>
        </div>
    );
};

export default ForgotPasssword;