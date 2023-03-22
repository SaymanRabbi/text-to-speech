import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnRight,faBoxesPacking} from '@fortawesome/free-solid-svg-icons';
const Heading = () => {
    return (
        <div className='py-5'>
        <h2 className=' text-2xl '>My Text to Speech Projects </h2>
        <div className='gap-2 flex items-center'>
            <FontAwesomeIcon icon={faBoxesPacking} className=' w-4 h-4 font-thin'/>
           <span className='font-thin'>User</span>
           <FontAwesomeIcon icon={faArrowTurnRight} className=' w-4 h-4 font-thin'/>
           <a href="#" className=''> My TTS Projects</a>
        </div>
    </div>
    );
};

export default Heading;