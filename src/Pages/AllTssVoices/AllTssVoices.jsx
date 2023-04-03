import { faCloud } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import CopyRight from '../AudioResult/CopyRight';
import Heading from '../Heading';
import AllVoiceContainer from './AllVoiceContainer';

const AllTssVoices = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={` ${sidebar.sideBar?sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640 ?'w-[70%] top-0 z-40':'w-[95%]':'lg:w-[84%] sm:w-[70%] w-full'} bg-[#F5F9FC] ml-auto mt-8`}>
       <div className='p-10'>
       <Heading icon={faCloud} tittle={'All Voices'} subhedding={'All Voices'}     />
        <div className='bg-white md:p-32 p-4 shadow-md rounded-md'>
            <AllVoiceContainer/>
        </div>
       </div>
        
        <CopyRight/>
    </div>
    );
};

export default AllTssVoices;