import './App.css';
import BoogieHome from './Pages/BoogieHome';
import CreateBoogie from './Pages/CreateBoogie';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkBoogie from './Pages/LinkBoogie';
import KakaoLoginCallback from './Components/KakaoLoginCallback';
import { Navigate } from 'react-router-dom';
import BoogieMain from './Pages/BoogieMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/BoogieHome" element={<BoogieHome />} />
        <Route path="/CreateBoogie" element={<CreateBoogie />} />
        <Route path="/LinkBoogie" element={<LinkBoogie />} /> */}
        <Route path="/BoogieMain" element={<BoogieMain />} />
        <Route path="/Kakao/callback" element={<KakaoLoginCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
