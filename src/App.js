import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from './LumiqForm/PageA';
import RegistrationB from './LumiqForm/PageB';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Registration/>} />
        <Route path="/RegistrationB" element={<RegistrationB />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
