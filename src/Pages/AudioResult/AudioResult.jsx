import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import CopyRight from './CopyRight';
import Heading from './Heading';
import MainContent from './MainContent';
import MainContentMenu from './MainContentMenu';


const AudioResult = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={` ${sidebar.sideBar?'w-[95%]':'w-[84%]'} p-10 bg-[#F5F9FC] ml-auto mt-8`}>
           <Heading/>
           <div className='bg-white p-10 shadow-md rounded-md'>
           <MainContent/>
           <MainContentMenu/>
           </div>
           <CopyRight/>
        </div>
    );
};

export default AudioResult;