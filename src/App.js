import logo from './logo.svg';
import './App.css';
import Practice from './SortingVisualizer.jsx';
import Header from './Header/Header';
import PracticeVideo from './Components/VideoPlayer/PracticeVideo';
function App() {
  return (
    <div className="App">
      <Header/>
      <Practice/>
      <PracticeVideo/>
    </div>
  );
}

export default App;
