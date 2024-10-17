import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/black-belt-boxing' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </HashRouter>
    </div>
  );
}

export default App;