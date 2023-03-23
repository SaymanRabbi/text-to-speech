import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import CopyRight from '../AudioResult/CopyRight';
import Heading from '../Heading';


const MyReferrals = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={` ${sidebar.sideBar?sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640 ?'w-[70%] top-0 z-40':'w-[95%]':'lg:w-[84%] sm:w-[70%] w-full'} p-10 bg-[#F5F9FC] ml-auto mt-8`}>
            <Heading icon={faSackDollar} tittle={'My Referrals'} subhedding={'My Referrals'}/>
            <CopyRight/>
        </div>
    );
};

export default MyReferrals;