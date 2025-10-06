import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ButtonBar from './components/ButtonBar';
import './App.css';

function App() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App flex">
      <Sidebar />
      <MainContent />
      <ButtonBar />
    </div>
  );
}

export default App;
