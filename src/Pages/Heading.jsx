import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight,faBoxesPacking,faWandSparkles,faMusic} from '@fortawesome/free-solid-svg-icons';
const Heading = ({icon,tittle,subhedding}) => {
    return (
        <div className='py-5'>
        <h2 className=' text-2xl '>{tittle} </h2>
        <div className='gap-2 flex items-center'>
            <FontAwesomeIcon icon={icon} className=' w-4 h-4 font-thin'/>
           <span className='font-thin'>User</span>
           <FontAwesomeIcon icon={faAnglesRight} className=' w-4 h-4'/>
           <a href="#" className=' text-base text-blue-500'>{subhedding}</a>
        </div>
    </div>
    );
};

export default Heading;