import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div>
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/black-belt-boxing' element={<Home />} />
      <Route path='/contact' element={<Home />} />
      <Route path='/usaboxing' element={<Home />} />
      <Route path='/waiver' element={<Home />} />
      <Route path='/pay' element={<Home />} />
      <Route path='/schedule' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </HashRouter>
    </div>
  );
}

export default App;