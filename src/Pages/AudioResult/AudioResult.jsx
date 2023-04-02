import { faMusic } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import Heading from '../Heading';
import CopyRight from './CopyRight';
import MainContent from './MainContent';
import MainContentMenu from './MainContentMenu';


const AudioResult = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={`${sidebar.sideBar?sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640 ?'w-[70%] top-0 z-40':'w-[95%]':'lg:w-[84%] sm:w-[70%] w-full'} p-10 bg-[#F5F9FC] ml-auto mt-8`}>
           <Heading icon={faMusic} tittle={'Synchesized Results Data'} subhedding={'My TTS Audio Results'}/>
           <div className='bg-white p-10 shadow-md rounded-md'>
           <MainContent tittle={'All My Synthesized Text Results'}/>
           <MainContentMenu />
           </div>
           <CopyRight/>
        </div>
    );
};

export default AudioResult;