import React from 'react';
import Content from './Content';
import DubboleButton from './DubboleButton';
import Heading from './Heading';
import Select from './Select';
import Subcategory from './Subcategory';
import './TextToSpeech.css';
const TextToSpeech = () => {
    return (
        <div className=' w-[84%] p-5 bg-[#F5F9FC] ml-auto'>
            <Heading/>
            <Content/>
            <Select/>
            <Subcategory/>
            <DubboleButton/>
        </div>
    );
};

export default TextToSpeech;