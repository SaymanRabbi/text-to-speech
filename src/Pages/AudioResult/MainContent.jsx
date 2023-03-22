import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
    const [value,setValue] = useState('')
    return (
        <div>
            <h2 className=' font-bold'>All My Synthesized Text Results</h2>
            <div className='relative'>
           {
                value.length?null  :<FontAwesomeIcon icon={faSearch} className=' w-4 h-4 absolute top-2 right-40 text-black'/> 
           }
            <input type="text" className='block ml-auto h-8 outline-none border-b-2' onChange={(e)=>setValue(e.target.value)}/>
            </div>
            <div>

            </div>
        </div>
    );
};

export default MainContent;