import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

const MainContent = ({tittle}) => {
    const [value,setValue] = useState('')
    return (
        <div className='md:flex justify-between items-center'>
            <h2 className=' font-bold'>{tittle}</h2>
            <div className='relative transition ease-in duration-300'>
           {
                value.length?null  :<FontAwesomeIcon icon={faSearch} className=' w-4 h-4 absolute top-2 left-0 text-black'/> 
           }
            <input type="text" className={`block transition ease-in duration-500 ${value?'':"px-4"} h-8 outline-none border-blue-500 border-b-2 w-full`} onChange={(e)=>setValue(e.target.value)}/>
            </div>
        </div>
    );
};

export default MainContent;