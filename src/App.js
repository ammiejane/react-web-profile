import './App.css';
import NavBar from './components/Navbar';  // you already have this
import TopSection from './components/TopSection';
import Details from './components/Details';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content">
        <TopSection />
        <Details />
      </div>
    </div>
  );
}

export default App;