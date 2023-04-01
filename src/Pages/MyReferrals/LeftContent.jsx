import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faDollarSign,faUniversity } from '@fortawesome/free-solid-svg-icons';

const LeftContent = () => {
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
                              <p className=' font-bold mt-3'>{item.tittle}</p>
                            </div>
                        </div>

                     )
               }
            </div>
        </div>
    );
};

export default LeftContent;