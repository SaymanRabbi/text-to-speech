import { collection, getDocs } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase.init';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const FindAccount = ({setTest,setUser,user}) => {
    const [email, setEmail] = useState('')
    const findAccountfunc = async() => {
        try {
            const DataCollection = collection(db,'users');
            const dataSnapshot = await getDocs(DataCollection);
            const singelData = dataSnapshot.docs.find(doc => doc.data().email===email)
            console.log(singelData?.data())
                setUser(singelData?.data())
                if(singelData?.data()){
                    setTest(1)}
                else{
                 toast.error('Email not found! Please Remember and try again')
                }
                
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className=' h-[85vh] flex justify-center items-center px-3'>
            <div className='p-4 w-[570px] shadow-lg rounded-md bg-[#FFFFFF]'>
                  <h1 className='text-2xl'>Find Your Account</h1>
                  <hr  className='my-4'/>
                  <p>
                  Please enter your email address or mobile number to search for your account.
                  </p>
                  <div className='flex justify-center items-center mt-3'>
                        <input type="text" className=' w-[70%] border-2 border-gray-300 rounded-md p-3 mt-2 outline-none  focus:border-blue-500 bg-[#F9FAFB]' placeholder='Your Email or Mobile Number...' onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                  <hr  className='my-4'/>
                  <div className=' flex justify-end items-center gap-4'>
                           <Link to='/login' className='py-2 px-5 font-medium rounded-md bg-gray-300'>
                            Cancel
                           </Link>
                           <button className='py-2 px-5 font-medium rounded-md bg-blue-600 text-white' onClick={()=>findAccountfunc()}>
                            Search
                           </button>
                  </div>
            </div>
        </div>
    );
};

export default FindAccount;