import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App flex">
      <ThemeToggle />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
