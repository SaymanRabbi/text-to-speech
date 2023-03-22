
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import TextToSpeech from './Pages/TextToSpeech/TextToSpeech';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <TextToSpeech/>
    </div>
  );
}

export default App;
