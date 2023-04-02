import React from 'react';
import google from '../../img/google.png'
import apple from '../../img/apple.png'
import login from '../../img/login.svg'
import CopyRight from '../AudioResult/CopyRight';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className=' bg-[#F9FAFB]'>
        <div className=' grid grid-cols-12 md:py-24 py-16 md:px-28 px-5 gap-10'>
          <div className=' lg:col-span-6 col-span-12 p-6 shadow-lg rounded-md bg-white lg:order-1 order-2'>
            <h2 className=' font-bold text-2xl mb-2'>
            Create your Account
            </h2>
            <p className='text-sm text-gray-600'>
            Start your website in seconds. Already have an account? <Link to='/login' className='font-bold text-blue-500 '>Login here.</Link>
            </p>
            <form>
                <div className='mt-4 grid grid-cols-2 gap-8'>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Your Full Name</label>
                    <input type="text" className=' w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Full Name...'/>
                    </div>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Your Email</label>
                    <input type="email" className=' w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Email...'/>
                    </div>
                </div>
                <div className='mt-4 grid grid-cols-2 gap-8'>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Country</label>
                     
                    <select className=' w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]'>
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
               <input type="checkbox" className='h-8 p-2'/>
               <p>By signing up, you are creating a Flowbite account, and you agree to Flowbite’s <span className='text-blue-500'>Terms of Use</span> and <span className='text-blue-500'>Privacy Policy</span>.</p>
            </div>
            <div className='mt-10 h-12 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 cursor-pointer flex items-center justify-center'>
                 Create An Account
            </div>
          </div>
          <div className=' lg:col-span-6 col-span-12 flex justify-center items-center lg:order-2 order-1 p-8'>
              <img src={login} className='w-full bg-cover h-full'/>
          </div>
        </div>
       
        <CopyRight/>
       
       </section>
    );
};

export default Register;