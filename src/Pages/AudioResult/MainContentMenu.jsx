import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpDown} from '@fortawesome/free-solid-svg-icons';
const MainContentMenu = () => {
    const data =[
        {
            text:"Created On"
        },
        {
            text:'Language'
        },
        {
            text:'Voice'
        },
        {
            text:'Gender'
        },
        {
            text:'Voice Engine'
        },
        {
            text:'Format'
        },
        {
            text:'Chars'
        },{
            text:'Project Name'
        }
    ]
    return (
            <div>
        <div className='py-5'>
           <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-2'>
           {
                data.map((item,index)=>{
                    return(
                        <div className='flex items-center gap-1 bg-white  py-3 px-1 rounded cursor-pointer shadow-lg justify-center'>
                            <FontAwesomeIcon icon={faUpDown} className=' w-4 h-4 font-thin'/>
                            <span className=' font-bold'>{item.text}</span>
                        </div>
                    )
                })
            }
           </div>
        </div>
        <div className=' py-3 flex justify-center items-center'>
           <div className=' flex flex-col items-center'>
            <img src="https://tts.verbatik.com/img/files/no-result.png" alt="" />
            <h1 className=' text-xs'>No synthesized text results yet</h1>
           </div>
        </div>
        </div>
    );
};

export default MainContentMenu;