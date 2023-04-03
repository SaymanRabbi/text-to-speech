import { faPhotoFilm,faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Content = () => {
    return (
        <div>
            <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faPhotoFilm} className=' w-6 h-6 text-blue-500'/>
                <span className=' font-bold'>Sound Studio</span>
            </div>
            <hr className='my-4'/>
           <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 items-center'>
           <div>
                <h2 className='font-bold text-xl'>
                    Drag & Drop your music file or
                </h2>
                <h2 className='font-bold text-blue-600 text-xl text-center'>
                Browse
                </h2>
                <h2 className=' text-center'>
                    [
                    <span className='text-blue-600'>100MB</span>
                    <span className=''> :MP3 |</span>
                    <span className=''>WAV |</span>
                    <span className=''>OGG</span>

                    ]
                </h2>
                <div className='mt-5 flex justify-center'>
                <button className='
                hover:bg-blue-600 p-4 shadow-lg hover:text-white font-bold
                '>
                    Upload Music File
                </button>
                </div>
            </div>
            <div>
                <div>
                    <label className=' font-thin'>
                    Select Backround Music
                    </label>
                    <div className='gap-3 grid lg:grid-cols-2 grid-cols-1'>
                    <select className='bg-white p-3 shadow-lg w-full'>
                        <option defaultValue=''>Background Music</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        </select>
                        <button className='p-3 shadow-lg flex items-center hover:bg-blue-600 hover:text-white text-blue-600 w-12 justify-center'>
                            <FontAwesomeIcon icon={faPlay} className=' w-6 h-6 '/>
                        </button>
                    </div>
                </div>
                <div className=' mt-5'>
                    <label className=' font-thin'>
                    Set Background Music Volume
                    </label>
                    <div className='gap-3 flex'>
                    <select className='bg-white p-3 shadow-lg w-full'>
                        <option defaultValue=''>Defult</option>
                        <option value="saab">Loud</option>
                        <option value="mercedes">Medium</option>
                        <option value="audi">Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
            <div className='w-full'>
                    <label className=' font-thin'>
                    Set Final Result Volume
                    </label>
                    <div className='gap-3 flex'>
                    <select className='bg-white p-3 shadow-lg w-full'>
                        <option defaultValue=''>Defult</option>
                        <option value="saab">Loud</option>
                        <option value="mercedes">Medium</option>
                        <option value="audi">Low</option>
                        </select>
                    </div>
                </div>
                <div className='mt-5'>
                <label className=' font-thin'>
                Set Result Title
                </label>
                <input type="text" className='p-3 w-full border-blue-500 outline-none border-2 '/>
                </div>
            </div>
            <div className=' text-center'>
                <label className=' font-thin'>Audio File Format</label>
                <div className=' flex gap-3 justify-center'>
                   <div className='flex gap-2 items-center'>
                   <input type="checkbox" className='w-4 h-4'/>
                   <span className=' font-bold'>MP3</span>
                   </div>
                   <div className='flex gap-2 items-center'>
                   <input type="checkbox" className='w-4 h-4'/>
                   <span className=' font-bold'>WAV</span>
                   </div>
                   <div className='flex gap-2 items-center'>
                   <input type="checkbox" className='w-4 h-4'/>
                   <span className=' font-bold'>OGG</span>
                   </div>
                   
                </div>
            </div>
           </div>
           <div className='flex justify-center mt-8'>
             <button className='md:px-8 md:py-3 hover:bg-black rounded-3xl text-white bg-blue-500 font-medium px-3 py-2'>Merge Audio Files</button>
           </div>
        </div>
    );
};

export default Content;