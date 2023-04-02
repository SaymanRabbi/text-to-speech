import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faAlignLeft,faBell,faMaximize,faGlobe,faUserPlus,faAlignRight,faCompress} from '@fortawesome/free-solid-svg-icons';

import { SideBarContext } from '../../App';
import { useRef } from 'react';
import useClickoutside from '../../helpers/useClickOutSide';
import ProfileMain from '../Profile/ProfileMain';
const Topheader = () => {
    // ----show profile menu
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const profileMenuRef = useRef(null)
    // ----show profile menu
    useClickoutside(profileMenuRef,()=>setShowProfileMenu(false))
    //  sidebar rigt side icon
    const rightSideIcon = [
        {
            icon:faBell,
        },
        {
            icon:faMaximize,
        },
        {
            icon:faGlobe,
        }
        ,{
            icon:faUserPlus,
        }
    ]
    // get text from input
    const [text,setText] = useState('')
    // get text from input
      //  input show hide
      const [showInput, setShowInput] = useState(false)
    // ref for hidden searchbar
    const Ref = useRef(null)
    useClickoutside(Ref,()=>setShowInput(false))
    // ref for hidden searchbar
    // get context from app js
     const sidebar = useContext(SideBarContext)
    //  get f11 key press
    const f11 = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }
    return (
       <div className={`${sidebar.sideBar?sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640 ?'w-[70%] top-0 z-40':'w-[95%]':'lg:w-[84%] sm:w-[70%] w-full'}  ml-auto h-20  flex items-center py-2 px-5 fixed top-0 bg-white z-50 right-0 shadow-md`}>
         <div className=' flex'>
            {/* -----sidebar close on button-------- */}
            <div className='flex items-center justify-center w-12 h-12  cursor-pointer'
            onClick={()=>sidebar.setSideBar(!sidebar.sideBar)}
            >
                {
                    sidebar.sideBar? <FontAwesomeIcon icon={faAlignRight}/> : <FontAwesomeIcon icon={faAlignLeft}/>
                }
                {/* <FontAwesomeIcon icon={faAlignLeft}/> */}
            </div>
            {/* -----sidebar close on button-------- */}
            {/* ------search bar icon---------------- */}
            <div className='flex items-center justify-center w-12 h-12 relative' ref={Ref}>
               
                   <FontAwesomeIcon icon={faSearch} onClick={()=>setShowInput(!showInput)} className={`cursor-pointer z-20 ${text?'hidden':'block'}`}/>
                
                {
                    showInput?<input type="text" className={`absolute top-1 transition ease-in duration-300 ${text?'px-2':'px-7'} font-medium outline-none left-2 rounded h-9 shadow-blue-700 transition-all`} onChange={(e)=>setText(e?.target?.value)} style={{border:'2px solid #007BFF'}} />:null
                }
            </div>
        
            {/* ------search bar icon---------------- */}
         </div>
         <div className=' ml-auto flex gap-1 justify-center items-center relative'>
            {/* --------map right side header icon------------- */}
            {
                rightSideIcon.map((item,index)=>
                <div className='flex items-center justify-center w-12 h-12  cursor-pointer ' key={index}>
                {
                    item.icon===faMaximize? document.fullscreenElement? <FontAwesomeIcon icon={faCompress} onClick={f11}/> : <FontAwesomeIcon icon={faMaximize} onClick={f11}/> :item.icon===faUserPlus ?<FontAwesomeIcon icon={item?.icon} onClick={()=>setShowProfileMenu(!showProfileMenu)} ref={profileMenuRef}/>: <FontAwesomeIcon icon={item.icon} />
                }
            </div>
                )
            }
            {/* --------map right side header icon------------- */}
            {/* --------profile menu------------- */}
            {
                showProfileMenu?<div className='absolute top-16 right-0 w-50  bg-white shadow-md '>
                    <ProfileMain/>
                </div>:null
            }
            {/* --------profile menu------------- */}
         </div>
       </div>

    );
};

export default Topheader;