import React from 'react';
import img from '../../img/no-support.png'
const Noresult = () => {
    return (
        <div className=' py-3 flex justify-center items-center'>
        <div className=' flex flex-col items-center'>
         <img src={img} alt="" />
         <h1 className=' text-xs'>You have not created any support tickets yet</h1>
        </div>
     </div>
    );
};

export default Noresult;