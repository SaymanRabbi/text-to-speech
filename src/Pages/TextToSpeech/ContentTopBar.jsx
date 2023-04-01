import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh,faHistory} from '@fortawesome/free-solid-svg-icons';
const ContentTopBar = () => {
    return (
        <div className=' grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            <div className=' shadow-lg flex justify-center items-center bg-[#FFFFFF] h-14 w-full'>
                {/* ------Language Select dropdown-------- */}
                        <select className='rounded-md  shadow-sm  outline-none h-full w-full p-2.5  block'>
                        <option className=' outline-none py-4'>insert Language Using loop</option>
                        <option className=' outline-none py-4'>insert Language Using loop</option>
                        </select>    
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className=' shadow-lg flex justify-center items-center bg-[#FFFFFF] h-14 w-full'>
                {/* ------Language Select dropdown-------- */}
                        <select className='rounded-md  shadow-sm  outline-none h-full w-full p-2.5  block'>
                        <option className=' outline-none'>Choose Your Voice</option>
                        </select>
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className='shadow-lg flex justify-center items-center bg-[#FFFFFF] h-14 w-full gap-4 group relative px-3'>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute top-0 left-0 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Preview Selected Voice</span>  
                <FontAwesomeIcon icon={faVolumeHigh} className=' w-6 h-6 hover:text-white hover:bg-blue-500'/>
                <select className='rounded-md  shadow-sm  outline-none h-full w-full p-2.5  block'>
                        <option className=' outline-none'>Select Project Name</option>
                        </select>
            </div >
            <div className=' shadow-lg flex justify-center items-center bg-[#FFFFFF] h-14 w-full gap-4 group relative px-3'>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute top-0 left-0 -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Create New Project</span> 
                <FontAwesomeIcon icon={faHistory} className=' w-6 h-6'/>
                <input type="text"  className='hover:border-blue-400 border h-10 w-full'/>
            </div >
            
        </div>
    );
};

export default ContentTopBar;