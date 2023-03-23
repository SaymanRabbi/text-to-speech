
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import TextToSpeech from './Pages/TextToSpeech/TextToSpeech';
import { Routes,Route } from 'react-router-dom';
import OutletContainer from './Components/Outlet/OutletContainer';
import AudioResult from './Pages/AudioResult/AudioResult';
import TtsProject from './Pages/TtsProject/TtsProject';
import SoundStudio from './Pages/SoundStudio/SoundStudio';
import AllTssVoices from './Pages/AllTssVoices/AllTssVoices';
import ProfileSetting from './Pages/ProfileSetting/ProfileSetting';
import MyReferrals from './Pages/MyReferrals/MyReferrals';
import Support from './Pages/Support/Support';
import Notification from './Pages/Notification/Notification';
export const SideBarContext = createContext();
function App() {
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

  return (
    <div className="App">
     <SideBarContext.Provider value={{sideBar, setSideBar,screenSize}}>
     <Header />
      <Sidebar />
      <Routes>
        <Route component={<OutletContainer/>} >
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
      </Routes>
      </SideBarContext.Provider>
    </div>
  );
}

export default App;
