import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KakaoLoginCallback from './Components/KakaoLoginCallback';
import { Navigate } from 'react-router-dom';
import BoogieMain from './Pages/BoogieMain';
import WriteMessage from './Pages/WriteMessage';
import MessageMain from './Pages/MessageMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/BoogieMain" element={<BoogieMain />} />
        <Route path="/Kakao/callback" element={<KakaoLoginCallback />} />
        <Route path="/WriteMessage" element={<WriteMessage />} />
        <Route path="/MessageMain" element={<MessageMain />} />
      </Routes>
    </Router>
  );
}

export default App;
