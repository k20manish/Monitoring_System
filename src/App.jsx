import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Complaint_Monitoring from './component/Complaint_Monitorign';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/complaints" element={<Complaint_Monitoring />} /> */}
      </Routes>
    </Router>
  );
}

export default App;