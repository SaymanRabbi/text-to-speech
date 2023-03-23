import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import CopyRight from '../AudioResult/CopyRight';
import MainContent from '../AudioResult/MainContent';
import MainContentMenu from '../AudioResult/MainContentMenu';
import Heading from '../Heading';
import './TtsProject.css';

const TtsProject = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={` ${sidebar.sideBar?sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640 ?'w-[70%] top-0 z-40':'w-[95%]':'lg:w-[84%] sm:w-[70%] w-full'} p-10 bg-[#F5F9FC] ml-auto mt-8`}>
            <Heading icon={faBoxesPacking} tittle={'My Text to Speech Projects'} subhedding={'My TTS Projects'}/>
            <div className='bg-white p-10 shadow-md rounded-md'>
               <MainContent/>
               <MainContentMenu/>
            </div>
            <CopyRight/>
        </div>
    );
};

export default TtsProject;