import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnRight} from '@fortawesome/free-solid-svg-icons';

const Heading = () => {
    return (
        <div className='py-5'>
            <h2 className=' text-2xl font-bold'>Synthesize Text </h2>
            <div className='felx'>
               <span className=' font-bold'>User</span>
               <FontAwesomeIcon icon={faArrowTurnRight} className=' w-4 h-4 mx-2'/>
               <a href="#" className=''> Text-To-Speech</a>
            </div>
        </div>
    );
};

export default Heading;