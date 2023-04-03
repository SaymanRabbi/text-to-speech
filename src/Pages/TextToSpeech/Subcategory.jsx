import React from 'react';

const Subcategory = () => {
    return (
        <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-1 gap-3'>
            <div className=' shadow-lg flex justify-center items-center  h-14 w-full text-sm  bg-white'>
                {/* ------Language Select dropdown-------- */}
                <select className='bg-white px-2 rounded-md  shadow-sm  outline-none h-full w-full  block'>
                        <option className=' outline-none'>Speaking Style</option>
                        </select>    
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className=' shadow-lg flex justify-center items-center bg-[white] h-14 w-full text-sm '>
                {/* ------Language Select dropdown-------- */}
                <select className='bg-white rounded-md  shadow-sm  outline-none h-full w-full px-2  block'>
                        <option className=' outline-none'>Voice Effects</option>
                        </select>    
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className=' shadow-lg flex justify-center items-center bg-[white] h-14 w-full text-sm '>
                {/* ------Language Select dropdown-------- */}
                <select className='bg-white rounded-md  shadow-sm  outline-none h-full w-full px-2 block'>
                        <option className=' outline-none'>Say Us</option>
                        </select>    
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className=' shadow-lg flex justify-center items-center bg-[white] h-14 w-full text-sm'>
                {/* ------Language Select dropdown-------- */}
                <select className='bg-white rounded-md  shadow-sm  outline-none h-full w-full px-2  block'>
                        <option className=' outline-none'>Emphasis</option>
                        </select>    
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className=' shadow-lg flex justify-center items-center bg-[white] h-14 w-full text-sm'>
                {/* ------Language Select dropdown-------- */}
                <select className='bg-white rounded-md  shadow-sm  outline-none h-full w-full px-2  block'>
                        <option className=' outline-none'>Volume</option>
                        </select>    
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className=' shadow-lg flex justify-center items-center bg-[white] h-14 w-full text-sm'>
                {/* ------Language Select dropdown-------- */}
                <select className='bg-white rounded-md  shadow-sm  outline-none h-full w-full px-2  block'>
                        <option className=' outline-none'>Speed</option>
                        </select>    
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className=' shadow-lg flex justify-center items-center bg-[white] h-14 w-full text-sm'>
                {/* ------Language Select dropdown-------- */}
                <select className='bg-white rounded-md  shadow-sm  outline-none h-full w-full px-2  block'>
                        <option className=' outline-none'>Pitch</option>
                        </select>    
                {/* ------Language Select dropdown-------- */}
            </div>
            <div className=' shadow-lg flex justify-center items-center  h-14 w-full text-sm'>
                {/* ------Language Select dropdown-------- */}
                <select className='bg-white rounded-md  shadow-sm  outline-none h-full w-full px-2  block'>
                        <option className=' outline-none'>Pauses</option>
                        </select>    
                {/* ------Language Select dropdown-------- */}
            </div>
        </div>
    );
};

export default Subcategory;