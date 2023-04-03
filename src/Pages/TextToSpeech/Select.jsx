import React from 'react';

const Select = () => {
    return (
        <div className='md:flex py-4 gap-4'>
                <div className=' flex justify-center items-center gap-1'>
                    <input type="checkbox" className=' w-4 h-4' />
                    <label htmlFor="">MP3</label>
                </div>
                <div className=' flex justify-center items-center gap-1'>
                    <input type="checkbox" className=' w-4 h-4' />
                    <label htmlFor="">WAV</label>
                </div>
                <div className=' flex justify-center items-center gap-1'>
                    <input type="checkbox" className=' w-4 h-4' />
                    <label htmlFor="">OGG</label>
                </div>
                <div className=' flex justify-center items-center gap-1'>
                    <input type="checkbox" className=' w-4 h-4' />
                    <label htmlFor="">WEBM</label>
                </div>
        </div>
    );
};

export default Select;