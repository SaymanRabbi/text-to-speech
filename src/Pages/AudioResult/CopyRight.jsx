import React from 'react';

const CopyRight = () => {
    const year = new Date().getFullYear()
    return (
        <div className=' p-16 bg-[#FFFFFF] mt-20'>
            <div className='flex justify-center items-center'>
              <h2>Copyright © {year} <a href='https://techsroute.com/' target='_blank' className=' font-bold text-blue-500'>Techs Route</a> . All rights reserved</h2>
            </div>
        </div>
    );
};

export default CopyRight;