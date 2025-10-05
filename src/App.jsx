import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
