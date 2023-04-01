import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { SideBarContext } from '../../App';
import CopyRight from '../AudioResult/CopyRight';
import Heading from '../Heading';
import Content from './Content';
import DubboleButton from './DubboleButton';
import Select from './Select';
import Subcategory from './Subcategory';
import TextArea from './TextArea';
import './TextToSpeech.css';
const TextToSpeech = () => {
    const sidebar = useContext(SideBarContext)
    return (
        <div className={`${sidebar.sideBar?sidebar.sideBar&&sidebar.screenSize.dynamicWidth<640 ?'w-[70%] top-0 z-40':'w-[95%]':'lg:w-[84%] sm:w-[70%] w-full'} p-10 bg-[#F5F9FC] ml-auto mt-8`}>
            <Heading icon={faWandSparkles} tittle={'Synthesize Text'} subhedding={'Text-to-Speech'}/>
            <div className=' bg-white p-10 shadow-md rounded-md'>
            <Content/>
            <Select/>
            <Subcategory/>
            <DubboleButton/>
            <TextArea/>
            </div>
            <CopyRight/>
        </div>
    );
};

export default TextToSpeech;