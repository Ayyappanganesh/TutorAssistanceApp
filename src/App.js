import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Login from './components/LoginPage/Login';
import Signup from './components/SignupPage/Signup';
import TeacherProfile from './components/TeacherProfile/TeacherProfile';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/teacherProfile" element={<TeacherProfile/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
