import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const MainContent = () => {
    return (
        <div className='grid md:grid-cols-2 gap-6 grid-cols-1'>
            <LeftContent/>
            <RightContent/>
        </div>
    );
};

export default MainContent;