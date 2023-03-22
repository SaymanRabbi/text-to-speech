import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import Content from './Content';
import DubboleButton from './DubboleButton';
import Heading from './Heading';
import Select from './Select';
import Subcategory from './Subcategory';
import TextArea from './TextArea';
import './TextToSpeech.css';
const TextToSpeech = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={` ${sidebar.sideBar?'w-[95%]':'w-[84%]'} p-10 bg-[#F5F9FC] ml-auto mt-8`}>
            <Heading/>
            <div className=' bg-white p-10 shadow-md rounded-md'>
            <Content/>
            <Select/>
            <Subcategory/>
            <DubboleButton/>
            <TextArea/>
            </div>
        </div>
    );
};

export default TextToSpeech;