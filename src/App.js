import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/black-belt-boxing' element={<Home />} />
    </Routes>
    </HashRouter>
    </div>
  );
}

export default App;