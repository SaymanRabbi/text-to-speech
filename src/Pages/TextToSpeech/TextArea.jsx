import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileText,faMusic,faTimes,faTrash,faLayerGroup} from '@fortawesome/free-solid-svg-icons';
const TextArea = () => {
    return (
       <div>
         <div className='border  p-2'>
            <div className='  min-h-[300px] bg-[#f5f9fc] py-3'>
            <div className='flex px-5 gap-6 justify-center items-center'>
               <div className=' w-10 h-10 rounded-full bg-white flex justify-center items-center'>
               <FontAwesomeIcon icon={faFileText} className=' w-4 h-4'/>
               </div>
                <textarea placeholder='Enter your text here to synthesize...' className='px-4 w-full py-1 outline-none shadow-lg min-h-[40px] overflow-y-scroll h-10'></textarea>
                <div className='flex gap-5'>
                    <FontAwesomeIcon icon={faMusic} className=' w-4 h-4 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTimes} className=' w-4 h-4 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTrash} className=' w-4 h-4 cursor-pointer'/>
                </div>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <div className='flex justify-center items-center w-12 h-12 rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer'>
                 <FontAwesomeIcon icon={faLayerGroup} className=' w-6 h-6 cursor-pointer'/>
                </div>
            </div>
        </div >
        <div className=' flex justify-between font-thin text-[12px] text-gray-600'>
            <div>
            <span className=' cursor-pointer'>0 characters ,</span>
            <span className=' cursor-pointer'>1 line</span>
            </div>
            <div className='flex gap-2'>
                <span className=' cursor-pointer'>Delete All Line</span>
                <span className=' cursor-pointer'>Clear Effects</span>
                <span className=' cursor-pointer'>Clear Text</span>
            </div>
        </div>
        </div>
        <div className='flex justify-center items-center py-5'>
            <button className='p-2 text-blue-500 font-bold rounded-md shadow-blue-500 hover:bg-blue-500 hover:text-white' style={{border:'1px solid #3B82F6'}}>
            Synthesize
            </button>
        </div>
       </div>
    );
};

export default TextArea;