import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faGlobe,faMicrophone,faGenderless,faMicrophoneLines,faTextSlash,faChartSimple,faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import { SideBarContext } from '../../App';
import img from '../../img/no-result.png'
const MainContentMenu = () => {
    const sidebar = useContext(SideBarContext)
    const data =[
        {
            text:"Created On",
            icon:faPlus
        },
        {
            text:'Language',
            icon:faGlobe
        },
        {
            text:'Voice',
            icon:faMicrophone
        },
        {
            text:'Gender',
            icon:faGenderless
        },
        {
            text:'Voice Engine',
            icon:faMicrophoneLines
        },
        {
            text:'Format',
            icon:faTextSlash
        },
        {
            text:'Chars',
            icon:faChartSimple

        },{
            text:'Project Name',
            icon:faProjectDiagram
        }
    ]
    return (
            <div>
        <div className='py-5'>
        {/* sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640 */}
           <div className={`grid lg:grid-cols-8 md:grid-cols-4 ${ sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640?'grid-cols-1':'grid-cols-2'} gap-2`}>
           {
                data.map((item,index)=>{
                    return(
                        <div className='flex items-center gap-5 bg-white  py-3 px-1 rounded cursor-pointer shadow-lg justify-center'>
                            <FontAwesomeIcon icon={item?.icon} className=' w-4 h-4'/>
                            <span className='text-sm'>{item.text}</span>
                        </div>
                    )
                })
            }
           </div>
        </div>
        <div className=' py-3 flex justify-center items-center'>
           <div className=' flex flex-col items-center'>
            <img src={img} alt="" />
            <h1 className=' text-xs'>No synthesized text results yet</h1>
           </div>
        </div>
        </div>
    );
};

export default MainContentMenu;