import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDollar,faFolder,faBoxesPacking,faPhotoFilm,faUserEdit,faKey,faArrowUp} from '@fortawesome/free-solid-svg-icons';

const ProfileMain = () => {
    const data = [
        {
            icon: faDollar,
            title: 'Increase Balance',
        },
        {
            icon: faFolder,
            title: 'TTS Results',
        },
        {
            icon: faBoxesPacking,
            title: 'My TTS Projects',
        },{
            icon: faPhotoFilm,
            title: 'Sound Studio',
        },{
            icon: faUserEdit,
            title: 'Profile',
        },{
            icon: faKey,
            title: 'Changes Password',
        },{
            icon: faArrowUp,
            title: 'Logout',
        }
    ]
    return (
        <div className=' py-2 px-4'>
            <div>
                <h2 className='text-center font-bold'>
                    User Name
                </h2>
                <h2 className='text-center text-sm'>
                    User Tittle
                </h2>
            </div>
            <hr className='my-3'/>
              {
                data.map((item,index)=>
                <div className='flex gap-2 items-center mb-4' key={index}>
                   <FontAwesomeIcon icon={item.icon} className=' w-4 h-4'/>
                     <span className='text-sm'>{item.title}</span>
                </div>
                )
              }
           
        </div>
    );
};

export default ProfileMain;