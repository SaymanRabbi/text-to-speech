import React from 'react';
import img from '../../img/no-notification.png'
const Noresult = () => {
    return (
        <div className=' py-3 flex justify-center items-center'>
        <div className=' flex flex-col items-center'>
         <img src={img} alt="" />
         <h1 className=' text-xs'>There are no notifications for you yet</h1>
        </div>
     </div>
    );
};

export default Noresult;