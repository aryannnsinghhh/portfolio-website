import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="App flex">
      <ThemeToggle />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
