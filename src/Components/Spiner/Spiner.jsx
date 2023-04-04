import React from 'react';
import { useState } from 'react';
import { BounceLoader } from 'react-spinners';

const Spiner = () => {
    let [color, setColor] = useState("#3B91F8");
    return (
        <div className=' w-full h-screen flex justify-center items-center'>
            <BounceLoader 
            color={color}  
        size={100}
        aria-label="Loading"
        data-testid="loader"
      />
        </div>
    );
};

export default Spiner;