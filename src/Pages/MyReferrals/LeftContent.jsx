import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faDollarSign,faUniversity,faLink } from '@fortawesome/free-solid-svg-icons';

const LeftContent = () => {
    const Ref= useRef(null)
    const [value,setValue] = useState('')
    
    const referraltext = [
        {
            icon:faUser,
            tittle:'My Referrals',
        },
        {
            icon:faDollarSign,
            tittle:'My Payouts',
        },
        {
            icon:faUniversity,
            tittle:'My Getways',
        }
    ]
    const copyCode = () => {
       const text= Ref.current.value
       setValue(text)

    }
    return (
        <div className=' bg-white p-10 shadow-md rounded-md'>
            <h2 className=' font-bold text-center text-2xl'>Referral</h2>
            <p className=' text-sm text-center mt-3 mb-6'>Invite your friends to Verbatik, if they sign up, you will get 1000 extra credits and you will also get a 30% commission on their first purchase.</p>
            <div className='grid md:grid-cols-2 gap-4 grid-cols-1 lg:grid-cols-3'>
               {
                     referraltext.map((item,index)=>
                     <div key={index} className='shadow-lg rounded p-8 w-full flex justify-center items-center hover:text-orange-500 cursor-pointer hover:border hover:border-orange-500 border border-transparent'>
                            <div className='flex flex-col justify-center items-center'>
                                <FontAwesomeIcon icon={item.icon} className=' w-6 h-6'/>
                              <p className='mt-3'>{item.tittle}</p>
                            </div>
                        </div>

                     )
               }
            </div>
            <div>
                <h2 className='mt-10 font-bold mb-2'>My Referral URL</h2>
                <div className='flex gap-2 justify-center items-center h-9'>
                    <input type="text" className='w-full h-full p-3 border border-gray-300 rounded-md hover:border-blue-500 hover:shadow-blue-500' value='https://someting/refaralcode' name='copy' disabled ref={Ref}/>
                    <div className=' flex justify-center items-center shadow-lg py-3 px-2 h-full cursor-pointer hover:text-white text-blue-500 hover:bg-blue-500'
                    onClick={()=>copyCode()}
                    >
                         <FontAwesomeIcon icon={faLink} className=' w-6 h-6'/>
                    </div>
                </div>
            </div>
            <div className='flex gap-8 justify-between mt-10'>
              <div>
                <div>
                    <h2 className=' font-bold'>My Earned Commissions</h2>
                     <p className='mt-2'>$0.00</p>
                </div>
                <div className='mt-10'>
                    <h2 className=' font-bold'>Referral Policy</h2>
                    <p className='mt-2'>All Successful Purchases</p>
                </div>
              </div>
              <div>
                <div>
                    <h2 className=' font-bold'>
                    My Earned TTS Credits
                    </h2>
                    <p className='mt-2'>0</p>
                </div>
                <div className=' mt-10'>
                    <h2 className=' font-bold'>Referral Commission Rate</h2>
                    <p className='mt-2'>30%</p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default LeftContent;