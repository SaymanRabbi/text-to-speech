import React from 'react';
import Logo from './Logo';
import './Sidebar.css'
import UserPanel from './UserPanel';
const Sidebar = () => {
    return (
        <div className=' fixed top-0 bottom-0 left-0 w-[16%]'>
            <Logo/>
            <hr/>
            <UserPanel/>
        </div>
    );
};

export default Sidebar;