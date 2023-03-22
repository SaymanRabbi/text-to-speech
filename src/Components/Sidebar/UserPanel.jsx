import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles,faMusic,faBoxesPacking,faPhotoFilm,faCloud,faUser,faQuestion,faExclamation,faSackDollar} from '@fortawesome/free-solid-svg-icons';
const UserPanel = () => {
    return (
        <div className='mt-6'>
           
           <li className='list-none p-4'>User Panel</li>
          
       
            <li className='list-none '>
                <a href="" className='px-6 py-4 bg-blue-500 w-full block text-white rounded-r-full  hover:px-7'>
                   
                   <FontAwesomeIcon icon={faWandMagicSparkles} className=' w-4 h-4 mr-2'/>
                    Text To Speech
                
                </a>
            </li>
            <li className='list-none '>
                <a href="" className='px-6 py-4  w-full block rounded-r-full  hover:px-7 text-black hover:bg-gray-200'>
                   
                   <FontAwesomeIcon icon={faMusic} className=' w-4 h-4 mr-2'/>
                   My TTS Audio Results
                
                </a>
            </li>
            <li className='list-none '>
                <a href="" className='hover:bg-gray-200 px-6 py-4  w-full block  rounded-r-full  hover:px-7 text-black'>
                   
                   <FontAwesomeIcon icon={faBoxesPacking} className=' w-4 h-4 mr-2'/>
                   My TTS Projects
                
                </a>
            </li>
            <li className='list-none '>
                <a href="" className='hover:bg-gray-200 px-6 py-4  w-full block text-black rounded-r-full  hover:px-7'>
                   
                   <FontAwesomeIcon icon={faPhotoFilm} className=' w-4 h-4 mr-2'/>
                   Sound Studio                
                </a>
            </li>
            <li className='list-none '>
                <a href="" className='hover:bg-gray-200 px-6 py-4  w-full block text-black rounded-r-full  hover:px-7'>
                   
                   <FontAwesomeIcon icon={faCloud} className=' w-4 h-4 mr-2'/>
                   All TTS Voices                
                </a>
            </li>
            <li className='list-none '>
                <a href="" className='hover:bg-gray-200 px-6 py-4  w-full block text-black rounded-r-full  hover:px-7'>
                   
                   <FontAwesomeIcon icon={faUser} className=' w-4 h-4 mr-2'/>
                   My Profile Settings
                
                </a>
            </li>
            <li className='list-none '>
                <a href="" className='hover:bg-gray-200 px-6 py-4  w-full block text-black rounded-r-full  hover:px-7'>
                   
                   <FontAwesomeIcon icon={faSackDollar} className=' w-4 h-4 mr-2'/>
                   My Referrals                </a>
            </li>
            <li className='list-none '>
                <a href="" className='hover:bg-gray-200 px-6 py-4  w-full block text-black rounded-r-full  hover:px-7'>
                   
                   <FontAwesomeIcon icon={faQuestion} className=' w-4 h-4 mr-2'/>
                   Support Request                
                </a>
            </li>
            <li className='list-none '>
                <a href="" className='hover:bg-gray-200 px-6 py-4  w-full block text-black rounded-r-full  hover:px-7'>
                   
                   <FontAwesomeIcon icon={faExclamation} className=' w-4 h-4 mr-2'/>
                   Notifications                
                </a>
            </li>
            
            
        </div>
    );
};

export default UserPanel;