import React, { useContext } from 'react';
import { SideBarContext } from '../../../App';

const AudioResult = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={` ${sidebar.sideBar?'w-[95%]':'w-[84%]'} p-10 bg-[#F5F9FC] ml-auto mt-8`}>
            AudioResult
        </div>
    );
};

export default AudioResult;