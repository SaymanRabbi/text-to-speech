import React from 'react';
import google from '../../img/google.png'
import apple from '../../img/apple.png'
import login from '../../img/register.webp'
import CopyRight from '../AudioResult/CopyRight';
import { Link, useNavigate } from 'react-router-dom';
import { useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { toast } from 'react-hot-toast';
const Login = () => {
    const naviagate = useNavigate()
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification( auth);
     const loginFunc = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
           if(userCredential.user.emailVerified){
            naviagate('/')
        }
        else{
            toast.error('Please verify your email first then try again')
            sendEmailVerification()
        }
    })

     }
    return (
       <section className=' bg-[#F9FAFB] w-full'>
        <div className=' grid grid-cols-12 md:pt-20 md:pb-8 pt-16 md:px-28 px-5 lg:gap-10'>
          <div className=' lg:col-span-6 col-span-12 px-8 py-20 shadow-lg rounded-md bg-white lg:order-1 order-2 w-full'>
            <h2 className=' font-bold text-2xl mb-2'>
            Login your Account
            </h2>
            <p className='text-sm text-gray-600'>
             Don't have an account? <Link to='/register' className='font-bold text-blue-500 '>Register here.</Link>
            </p>
            <form onSubmit={loginFunc}>
                <div className='mt-4 grid grid-cols-1'>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Your Email</label>
                    <input type="text" name='email' className=' w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Full Name...'/>
                    </div>
                </div>
                <div className='mt-4 grid grid-cols-1'>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Password</label>
                    <input type="password" name='password' className=' w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Password...'/>
                    </div>
                </div>
            
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
            <div className='mt-5 flex gap-3 text-gray-600 items-center justify-between'>
               <div className='flex gap-3 text-gray-600 items-center'>
               <input type="checkbox" className='h-8 p-2'/>
               <p className='text-sm lg:text-base'>Remember Me</p>
               </div>
               <div>
                 <Link to={'/forgotpassword'} className='text-blue-600 font-bold text-sm lg:text-base'>Forgot password?</Link>
               </div>
            </div>
            <div>
            <button className='mt-10 w-full h-12 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 cursor-pointer flex items-center justify-center' type='submit'>
                 Login Your Account
            </button>
            </div>
            </form>
          </div>
          <div className=' lg:col-span-6 col-span-12 flex justify-center items-center lg:order-2 order-1 p-8 w-full'>
              <img src={login} className='w-full bg-cover h-[80%]'/>
          </div>
        </div>
       
        <CopyRight/>
       
       </section>
    );
};

export default Login;