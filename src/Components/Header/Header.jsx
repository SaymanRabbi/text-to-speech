import React from 'react';
import './Header.css';
import Topheader from './Topheader';
const Header = ({setIsSidebarOpen}) => {
    return (
        <div>
            <Topheader setIsSidebarOpen={setIsSidebarOpen}/>
        </div>
    );
};

export default Header;