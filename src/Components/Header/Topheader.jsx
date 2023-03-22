import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faAlignLeft,faBell,faMaximize,faGlobe,faUserPlus} from '@fortawesome/free-solid-svg-icons';
const Topheader = () => {
    return (
       <div className=' w-[84%] ml-auto h-20  flex items-center py-2 px-5 fixed top-0 bg-white z-50 right-0'>
         <div className=' flex'>
            {/* -----sidebar close on button-------- */}
            <div className='flex items-center justify-center w-12 h-12  cursor-pointer'>
                <FontAwesomeIcon icon={faAlignLeft} />
            </div>
            {/* -----sidebar close on button-------- */}
            {/* ------search bar icon---------------- */}
            <div className='flex items-center justify-center w-12 h-12  cursor-pointer'>
                <FontAwesomeIcon icon={faSearch} />
            </div>
        
            {/* ------search bar icon---------------- */}
         </div>
         <div className=' ml-auto flex gap-1 justify-center items-center'>
            {/* ------notification icon------ */}
            <div className='flex items-center justify-center w-12 h-12  cursor-pointer'>
                <FontAwesomeIcon icon={faBell} />
            </div>
            {/* ------notification icon------ */}
            {/* ------display large and minimize--------- */}
            <div className='flex items-center justify-center w-12 h-12  cursor-pointer'>
                <FontAwesomeIcon icon={faMaximize} />
            </div>
                    
            {/* ------display large and minimize--------- */}
            {/* -------language select----- */}
            <div className='flex items-center justify-center w-12 h-12  cursor-pointer'>
                <FontAwesomeIcon icon={faGlobe} />
            </div>
            {/* -------language select----- */}
            {/* --------avatar---------- */}
            <div className='flex items-center justify-center w-12 h-12  cursor-pointer rounded-full bg-slate-100'>
                <FontAwesomeIcon icon={faUserPlus}  className=' w-8 h-8 rounded-full'/>
            </div>
            {/* --------avatar---------- */}
         </div>
       </div>

    );
};

export default Topheader;