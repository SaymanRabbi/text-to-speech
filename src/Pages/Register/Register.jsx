import React from 'react';
import google from '../../img/google.png'
import apple from '../../img/apple.png'
import login from '../../img/login.svg'
import CopyRight from '../AudioResult/CopyRight';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
    const [checked, setChecked] = useState(true)
    return (
        <section className=' bg-[#F9FAFB] w-full'>
        <div className=' grid grid-cols-12 md:pt-20 md:pb-8 md:px-28 px-5 lg:gap-10'>
          <div className=' lg:col-span-6 col-span-12 p-6 shadow-lg rounded-md bg-white lg:order-1 order-2 w-full'>
            <h2 className=' font-bold text-2xl mb-2'>
            Create your Account
            </h2>
            <p className='text-sm text-gray-600'>
            Start your website in seconds. Already have an account? <Link to='/login' className='font-bold text-blue-500 '>Login here.</Link>
            </p>
            <form>
                <div className='mt-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-8'>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Your Full Name</label>
                    <input type="text" className=' w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Full Name...'/>
                    </div>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Your Email</label>
                    <input type="email" className=' w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Email...'/>
                    </div>
                </div>
                <div className='mt-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-8'>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Country</label>
                     
                    <select className='bg-white  w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]'>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Srilanka">Srilanka</option>
                        <option value="Nepal">Nepal</option>
                        </select>
                    </div>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Password</label>
                    <input type="password" className=' w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Password...'/>
                    </div>
                </div>
            </form>
            <div className='flex gap-3 items-center my-4'>
                <div className=' w-full border-2 h-0'></div>
                 <h2>or</h2>
                <div className=' w-full border-2 h-0'></div>
            </div>
            <div className=' h-12 rounded-md border-2 border-gray-300 hover:bg-gray-300  cursor-pointer flex justify-center items-center font-medium '>
                <img src={google} alt="" className='w-10 h-8' />
                Sign Up with Google
            </div>
            <div className=' h-12 rounded-md border-2 border-gray-300 hover:bg-gray-300  cursor-pointer flex justify-center items-center font-medium mt-5 gap-1'>
                <img src={apple} alt="" className='w-8 h-8' />
                Sign Up with Apple
            </div>
            <div className='mt-5 flex gap-3 text-gray-600'>
               <input type="checkbox" className='h-8 p-2' onClick={()=>setChecked(!checked)}/>
               <p>By signing up, you are creating a text-to-speech account, and you agree to text-to-speech <span className='text-blue-500'>Terms of Use</span> and <span className='text-blue-500'>Privacy Policy</span>.</p>
            </div>
            <button type='button' className={`mt-10 h-12 w-full rounded-lg bg-blue-600 text-white font-bold cursor-pointer flex items-center justify-center ${checked?'cursor-not-allowed bg-gray-300':null}`}>
                 Create An Account
            </button>
          </div>
          <div className=' lg:col-span-6 col-span-12 flex justify-center items-center lg:order-2 order-1 p-8 w-full'>
              <img src={login} className='w-full bg-cover h-full'/>
          </div>
        </div>
       
        <CopyRight/>
       
       </section>
    );
};

export default Register;