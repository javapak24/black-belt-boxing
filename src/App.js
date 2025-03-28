import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Schedule from './Schedule';
import Waiver from './Waiver';
import UsaBoxing from './UsaBoxing';
import PaymentView from './PaymentView';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/black-belt-boxing" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/usaboxing" element={<UsaBoxing />} />
          <Route path="/waiver" element={<Waiver />} />
          <Route path="/securepay" element={<PaymentView />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
