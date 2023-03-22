
import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import TextToSpeech from './Pages/TextToSpeech/TextToSpeech';

export const SideBarContext = createContext();
function App() {
//  createContext is a hook that returns a context object
const [sideBar, setSideBar] = useState(false);


  return (
    <div className="App">
     <SideBarContext.Provider value={{sideBar, setSideBar}}>
     <Header />
      <Sidebar />
      <TextToSpeech/>
      </SideBarContext.Provider>
    </div>
  );
}

export default App;
