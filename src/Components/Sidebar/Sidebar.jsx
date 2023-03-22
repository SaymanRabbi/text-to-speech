import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import Logo from './Logo';
import './Sidebar.css'
import UserPanel from './UserPanel';
const Sidebar = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={`fixed top-0 bottom-0 left-0 ${sidebar.sideBar?'w-[5%]':'w-[16%]'}`}>
            <Logo/>
            <hr/>
            <UserPanel/>
        </div>
    );
};

export default Sidebar;