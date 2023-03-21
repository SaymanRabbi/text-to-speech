import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh,faHistory} from '@fortawesome/free-solid-svg-icons';
const ContentTopBar = () => {
    return (
        <div className=' flex gap-5'>
            <div className=' shadow-lg flex justify-center items-center bg-[#FFFFFF] h-14 w-full'>
                {/* ------Language Select dropdown-------- */}
                        <select className='rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none'>
                        <option className=' outline-none'>insert Language Using loop</option>
                        </select>    
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className=' shadow-lg flex justify-center items-center bg-[#FFFFFF] h-14 w-full'>
                {/* ------Language Select dropdown-------- */}
                        <select className='rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none'>
                        <option className=' outline-none'>Choose Your Voice</option>
                        </select>
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className='shadow-lg flex justify-center items-center bg-[#FFFFFF] h-14 w-full gap-4 group relative'>
            <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute top-0 left-0 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Preview Selected Voice</span>  
                <FontAwesomeIcon icon={faVolumeHigh} className=' w-6 h-6 hover:text-white hover:bg-blue-500'/>
                <select className='rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none'>
                        <option className=' outline-none'>Select Project Name</option>
                        </select>
            </div >
            <div className=' shadow-lg flex justify-center items-center bg-[#FFFFFF] h-14 w-full gap-4 group relative'>
            <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute top-0 left-0 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Create New Project</span> 
                <FontAwesomeIcon icon={faHistory} className=' w-6 h-6'/>
                <input type="text"  className='hover:border-blue-400 border h-10'/>
            </div >
            
        </div>
    );
};

export default ContentTopBar;