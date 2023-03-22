import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles,faMusic,faBoxesPacking,faPhotoFilm,faCloud,faUser,faQuestion,faExclamation,faSackDollar} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { SideBarContext } from '../../App';
const UserPanel = () => {
    const sidebar = useContext(SideBarContext)
    const data = [
        {
            icon: faWandMagicSparkles,
            title: 'Text To Speech',
            link: '/'
        },
        {
            icon: faMusic,
            title: 'My TTS Audio Results',
            link: '/audioresults'
        },
        {
            icon: faBoxesPacking,
            title: 'My TTS Projects',
            link: '/tTSprojects'
        }
        ,
        {
            icon: faPhotoFilm,
            title: 'Sound Studio',
            link: '/soundstudio'
        },{
            icon: faCloud,
            title: 'All TTS Voices',
            link: '/all-ttsvoices'
        },{
            icon: faUser,
            title: ' My Profile Settings',
            link: '/profilesettings'
        }
        
        ,
        {
            icon: faSackDollar,
            title: 'My Referrals',
            link: '/myreferrals'
        },{
            icon: faQuestion,
            title: 'Support Request ',
            link: '/supportrequest'
        },{
            icon: faExclamation,
            title: 'Notifications ',
            link: '/notifications'
        }
    ]

    return (
        <div className='mt-6'>
           
           {
                sidebar.sideBar ? null : <li className='list-none p-4'>User Panel</li>
           }
          {
                data.map((item,index) => (
                    <li className='list-none ' key={index} >
                        <NavLink to={item.link} 
                        className={({ isActive }) => isActive ? 'px-6 py-4  w-full block rounded-r-full  hover:px-7 text-white bg-blue-600': 'px-6 py-4  w-full block rounded-r-full  hover:px-7 text-black hover:bg-gray-200'}
                        >
                            <FontAwesomeIcon icon={item.icon} className=' w-4 h-4 mr-2'/>
                            {sidebar.sideBar ?  null: item.title}
                        </NavLink>
                    </li>
                ))
          }     
        </div>
    );
};

export default UserPanel;