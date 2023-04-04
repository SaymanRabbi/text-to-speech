
import { createContext, useEffect, useState } from 'react';
import './App.css';
import TextToSpeech from './Pages/TextToSpeech/TextToSpeech';
import { Routes,Route, useLocation } from 'react-router-dom';
import OutletContainer from './Components/Outlet/OutletContainer';
import AudioResult from './Pages/AudioResult/AudioResult';
import TtsProject from './Pages/TtsProject/TtsProject';
import SoundStudio from './Pages/SoundStudio/SoundStudio';
import AllTssVoices from './Pages/AllTssVoices/AllTssVoices';
import ProfileSetting from './Pages/ProfileSetting/ProfileSetting';
import MyReferrals from './Pages/MyReferrals/MyReferrals';
import Support from './Pages/Support/Support';
import Notification from './Pages/Notification/Notification';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import ForgotPasssword from './Pages/ForgotPassword/ForgotPasssword';
import { Toaster } from 'react-hot-toast';

export const SideBarContext = createContext();
function App() {
  // ------Get path name from url------
   const path = useLocation().pathname
   const [pathName, setPathName] = useState(path);
  // ------Get path name from url------
//  createContext is a hook that returns a context object
const [sideBar, setSideBar] = useState(false);
const [screenSize, getDimension] = useState({
  dynamicWidth: window.innerWidth,
});
const setDimension = () => {
  getDimension({
    dynamicWidth: window.innerWidth
  })
}

useEffect(() => {
  window.addEventListener('resize', setDimension);
  
  return(() => {
      window.removeEventListener('resize', setDimension);
  })
}, [screenSize])
 useEffect(() => {
   setPathName(path)
 }, [path])
  return (
    <div className="App">
     <SideBarContext.Provider value={{sideBar, setSideBar,screenSize}}>
      <Routes>
        <Route element={<OutletContainer/>} >
          <Route path="/" element={<TextToSpeech/>} />
          <Route path='/audioresults' element={<AudioResult/>} />
          <Route path='/ttsProject' element={<TtsProject/>} />
          <Route path='/soundstudio' element={<SoundStudio/>} />
          <Route path='/allttsvoices' element={<AllTssVoices/>} />
          <Route path='/profilesettings' element={<ProfileSetting/>} />
          <Route path="/myreferrals" element={<MyReferrals/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='/notification' element={<Notification/>} />
        </Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgotpassword' element={<ForgotPasssword/>} />
      </Routes>
      <Toaster   position="top-right"
  reverseOrder={false}/>
      </SideBarContext.Provider>
    </div>
  );
}

export default App;
