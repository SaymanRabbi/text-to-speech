import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDollar,faFolder,faBoxesPacking,faPhotoFilm,faUserEdit,faKey,faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProfileMain = () => {
    const data = [
        {
            icon: faDollar,
            title: 'Increase Balance',
            link: '/myreferrals'
        },
        {
            icon: faFolder,
            title: 'TTS Results',
            link: '/ttsProject'
        },
        {
            icon: faBoxesPacking,
            title: 'My TTS Projects',
            link: '/ttsProject'
        },{
            icon: faPhotoFilm,
            title: 'Sound Studio',
            link: '/soundstudio'
        },{
            icon: faUserEdit,
            title: 'Profile',
            link:'/profile'
        },{
            icon: faKey,
            title: 'Changes Password',
            link:'/changespass'
        },{
            icon: faArrowUp,
            title: 'Logout',
            link:'/login'
        }
    ]
    return (
        <div className=' py-2 px-5 w-full'>
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
                <Link to={item?.link} className='flex gap-2 items-center mb-4 cursor-pointer hover:px-1' key={index}>
                   <FontAwesomeIcon icon={item.icon} className=' w-4 h-4'/>
                     <span className='text-sm'>{item.title}</span>
                </Link>
                )
              }
           
        </div>
    );
};

export default ProfileMain;