import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import CopyRight from '../AudioResult/CopyRight';
import Heading from '../Heading';


const ProfileSetting = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={` ${sidebar.sideBar?sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640 ?'w-[70%] top-0 z-40':'w-[95%]':'lg:w-[84%] sm:w-[70%] w-full'} bg-[#F5F9FC] ml-auto mt-8`}>
            <div className='p-10'>
            <Heading icon={faUser} tittle={'My Profile'} subhedding={'My Profile Setting'}/>
            </div>
            <CopyRight/>
        </div>
    );
};

export default ProfileSetting;