import React, { useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileText,faMusic,faTimes,faTrash,faLayerGroup} from '@fortawesome/free-solid-svg-icons';
import { SideBarContext } from '../../App';
const TextArea = () => {
    const [text,setText] = React.useState(0)
    const [line,setLine] = React.useState(0)
    const textRef = useRef()
    // get how much character is there in the text area
    // get how much line is there in the text area
    const handleText = (e) => {
        // get character and line from the text area
        const {value} = e.target
        // set the character and line to the state
        setText(value.length)
        // get the line from the text area
        const line = value.split('\n').length
        // set the line to the state
        setLine(line)
    }
    // remove all the text from the text area
    const handleClearText = () => {
        textRef.current.value = ''
        setText(0)
        setLine(0)
    }
    const sidebar = useContext(SideBarContext)
    return (
        //
       <div>
         <div className='border  md:p-2'>
            <div className='min-h-[300px] bg-[#f5f9fc] py-3'>
            <div className={`${sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640?null:'flex  '} px-5 md:gap-6 gap-2 justify-center items-center`}>
               <div className=' w-10 h-10 rounded-full bg-white justify-center items-center hidden md:flex'>
               <FontAwesomeIcon icon={faFileText} className=' w-4 h-4'/>
               </div>
                <textarea ref={textRef} onChange={(e)=>handleText(e)} placeholder='Enter your text here..' className='px-4 w-full py-1 outline-none shadow-lg min-h-[40px] overflow-y-scroll h-10'></textarea>
                <div className='flex md:gap-5 gap-3'>
                    <FontAwesomeIcon icon={faMusic} className=' md:w-4 md:h-4 w-3 h-3 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTimes} className=' md:w-4 md:h-4 w-3 h-3 cursor-pointer'/>
                    <FontAwesomeIcon icon={faTrash} className=' md:w-4 md:h-4 w-3 h-3 cursor-pointer' onClick={()=>handleClearText()}/>
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
            <span className=' cursor-pointer'>{text} characters ,</span>
            <span className=' cursor-pointer'>{line} Line</span>
            </div>
            <div className='flex gap-2'>
                <span className=' cursor-pointer'>Delete All Line</span>
                <span className=' cursor-pointer'>Clear Effects</span>
                <span className=' cursor-pointer'>Clear Text</span>
            </div>
        </div>
        </div>
        <div className='flex justify-center items-center py-5'>
            <button className='p-2 text-blue-500 font-bold rounded-md shadow-blue-500 hover:bg-blue-500 hover:text-white' style={{border:'1px solid #3B82F6'}}
            >
            Synthesize
            </button>
        </div>
       </div>
    );
};

export default TextArea;