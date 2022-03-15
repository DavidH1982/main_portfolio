import './App.css';
import GeometricBG from './components/geometricBG';
import NavBar from './components/navBar';
import Page2 from './components/page_2';
import Page3 from './components/page_3';
import Page4 from './components/page_4';
import Page5 from './components/page_5';

function App() {
  return (
    <div className="App">
      <GeometricBG />
      <NavBar />
      <Page3 />
      <Page2 />
      <Page4 />
      <Page5 />
    </div>
  );
}

export default App;
