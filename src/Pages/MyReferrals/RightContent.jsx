import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload,faCheck,faUserCheck } from '@fortawesome/free-solid-svg-icons';

const RightContent = () => {
    return (
        <div className=' bg-white p-10 shadow-md rounded-md'>
             <h2 className='font-bold text-center text-2xl'>How It Works</h2>
             <div className=' grid md:grid-cols-3 gap-6 mt-10 grid-cols-1'>
               <div>
                 <div className='flex flex-col justify-center items-center'>
                     <div className='flex justify-center items-center rounded-full bg-blue-100 w-16 h-16'>
                        <FontAwesomeIcon icon={faUpload} className=' w-8 h-8 text-blue-500'/>
                        </div>
                        <div className=' text-center'>
                            <h2>
                            Send Invitation
                            </h2>
                            <p className=' text-xs'>
                            Send your referral link to your friends and tell them how cool is Verbatik Text to Speech!
                            </p>
                        </div>
                 </div>
               </div>
               <div>
                 <div className='flex flex-col justify-center items-center'>
                     <div className='flex justify-center items-center rounded-full bg-blue-100 w-16 h-16'>
                        <FontAwesomeIcon icon={faUserCheck} className=' w-8 h-8 text-blue-500'/>
                        </div>
                        <div className=' text-center'>
                            <h2>
                            Registration
                            </h2>
                            <p className=' text-xs'>
                            Let them register to our Text to Speech services using your referral link.
                            </p>
                        </div>
                 </div>
               </div>
               <div>
                 <div className='flex flex-col justify-center items-center'>
                     <div className='flex justify-center items-center rounded-full bg-blue-100 w-16 h-16'>
                        <FontAwesomeIcon icon={faCheck} className=' w-8 h-8 text-blue-500'/>
                        </div>
                        <div className=' text-center'>
                            <h2>
                            Get Commissions
                            </h2>
                            <p className=' text-xs'>
                            Earn 30% commission for every prepaid or subscription plan purchases!
                            </p>
                        </div>
                 </div>
               </div>
             </div>
             <div>
             <h2 className='mt-10 font-bold mb-2'>Invite your friends</h2>
             <div>
                    <div className='flex gap-2 items-center h-9'>
                         <input type="text" className=' h-full px-4 w-full border-blue-500 outline-none border-2' placeholder='Email Address' />

                            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Invite</button>
                        </div>
             </div>
             </div>
        </div>
    );
};

export default RightContent;