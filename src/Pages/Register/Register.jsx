import React, { useEffect } from 'react';
import google from '../../img/google.png'
import apple from '../../img/apple.png'
import login from '../../img/login.svg'
import CopyRight from '../AudioResult/CopyRight';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth, db } from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { addDoc, collection } from 'firebase/firestore';

const Register = () => {
    const navigate = useNavigate();
    const [signInWithGoogle,googleuser, loading, error] = useSignInWithGoogle(auth)
    // create user
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    //   ----send email verification-------
    const [sendEmailVerification] = useSendEmailVerification( auth);
    //   ----send email verification-------
    const [checked, setChecked] = useState(true)
    const registernewUser = async(e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const country = e.target.country.value
        const data ={
            name,
            email,
            password,
            country
        }
        // create new user and store in firebase
        createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            (!userCredential.user.emailVerified) && sendEmailVerification()
            

           
            // ...
            // send email verification
            .then(() => {
                // Email verification sent!
                // ...
               toast.success('Email verification sent! please check your email')
                navigate('/login')
            });
        })
        try {
            await addDoc(collection(db, "users"), data)
        } catch (error) {
            console.log(error)
        }

    }
    // ------sign in with google--------
    const signInWithGooglefunc =async () => {
        await signInWithGoogle()
         try {
            console.log(googleuser)
         } catch (error) {
            
         }
    }
    // ------sign in with google--------
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
            <form onSubmit={registernewUser}>
                <div className='mt-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-8'>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Your Full Name</label>
                    <input type="text" name='name' className=' w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Full Name...'/>
                    </div>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Your Email</label>
                    <input type="email" name='email' className=' w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Email...'/>
                    </div>
                </div>
                <div className='mt-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-8'>
                    <div>
                    <label className='text-sm font-bold text-gray-700'>Country</label>
                     
                    <select className='bg-white  w-full border-2 border-gray-300 rounded-md p-2 mt-2 outline-none  focus:border-blue-500' name='country'>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Srilanka">Srilanka</option>
                        <option value="Nepal">Nepal</option>
                        </select>
                    </div>
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
            <div className=' h-12 rounded-md border-2 border-gray-300 hover:bg-gray-300  cursor-pointer flex justify-center items-center font-medium ' onClick={()=>signInWithGooglefunc()}>
                <img src={google} alt="" className='w-10 h-8' />
                {
                    loading ? <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div> : <button>Sign Up with Google</button>
                }
            </div>
            <div className=' h-12 rounded-md border-2 border-gray-300 hover:bg-gray-300  cursor-pointer flex justify-center items-center font-medium mt-5 gap-1'>
                <img src={apple} alt="" className='w-8 h-8' />
                Sign Up with Apple
            </div>
            <div className='mt-5 flex gap-3 text-gray-600'>
               <input type="checkbox" className='h-8 p-2' onClick={()=>setChecked(!checked)}/>
               <p>By signing up, you are creating a text-to-speech account, and you agree to text-to-speech <span className='text-blue-500'>Terms of Use</span> and <span className='text-blue-500'>Privacy Policy</span>.</p>
            </div>
            <button type='submit' className={`mt-10 h-12 w-full rounded-lg bg-blue-600 text-white font-bold cursor-pointer flex items-center justify-center ${checked?'cursor-not-allowed bg-gray-300':null}`}>
                 Create An Account
            </button>
            </form> 
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