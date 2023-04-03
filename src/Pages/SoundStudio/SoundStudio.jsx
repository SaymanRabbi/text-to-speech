import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import CopyRight from '../AudioResult/CopyRight';
import MainContentMenu from '../AudioResult/MainContentMenu';
import Heading from '../Heading';
import Content from './Content';
import './SoundStudio.css';
const SoundStudio = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={`${sidebar.sideBar?sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640 ?'w-[70%] top-0 z-40':'w-[95%]':'lg:w-[84%] sm:w-[70%] w-full'}  bg-[#F5F9FC] ml-auto mt-8`}>
        <div className='p-10'>
        <Heading icon={faPhotoFilm} tittle={'My Sound Studio'} subhedding={'Sound Studio'}/>
        <div className='bg-white p-10 shadow-md rounded-md'>
            <Content/>
        </div>
        <div className='bg-white p-10 shadow-md rounded-md mt-16'>
            <MainContentMenu/>
        </div>
        </div>
        <CopyRight/>
    </div>
    );
};

export default SoundStudio;