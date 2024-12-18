import './App.css';
import BoogieHome from './Pages/BoogieHome';
import CreateBoogie from './Pages/CreateBoogie';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkBoogie from './Pages/LinkBoogie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BoogieHome" element={<BoogieHome />} />
        <Route path="/CreateBoogie" element={<CreateBoogie />} />
        <Route path="/LinkBoogie" element={<LinkBoogie />} />
      </Routes>
    </Router>
  );
}

export default App;
