import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import Logo from './Logo';
import './Sidebar.css'
import UserPanel from './UserPanel';
const Sidebar = () => {
    const sidebar = useContext(SideBarContext)
    // console.log(sidebar.screenSize)
    // console.log()
    return (
        <div className={`fixed top-0 bottom-0 left-0 ${sidebar.sideBar?sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640 ?'w-[30%] fixed top-0 z-40':'w-[5%]':'lg:w-[16%] sm:w-[30%] w-0'}`}>
            <Logo/>
            <hr/>
            <UserPanel/>
        </div>
    );
};

export default Sidebar;