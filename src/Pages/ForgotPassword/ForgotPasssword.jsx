import React from 'react';
import FindAccount from './FindAccount';
import CopyRight from '../AudioResult/CopyRight';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import { useState } from 'react';
const ForgotPasssword = () => {
    const [test,setTest] = useState(0)
    return (
        <div className=' bg-[#F0F2F5] relative'>
            {/* ------header-------- */}
            <div className=' absolute top-0 w-full p-3 flex justify-between items-center shadow-lg'>
              <img src={logo} alt="" className=' w-28 h-full' />
            {/* ------header-------- */}
              <Link to='/login' className='py-2 px-5 font-medium rounded-md bg-blue-600 text-white'>
                            Login
                           </Link>
            </div>
            <FindAccount/>
            <CopyRight/>
        </div>
    );
};

export default ForgotPasssword;