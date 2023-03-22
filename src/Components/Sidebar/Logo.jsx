import React from 'react';
import img from '../../img/logo.png';
const Logo = () => {
    return (
        <div className=' flex justify-center items-center py-1 h-20'>
            <img src={img} alt="" className='w-full h-full'/>
        </div>
    );
};

export default Logo;