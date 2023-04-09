import Home from "./pages/Home/Home";
import Topbar from "./Components/topbar/Tapbar";
import Register from "./pages/register/Register";
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Single from "./pages/single/Single";
import Write from './pages/write/Write';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
      <Topbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/postId" element={<Single />} />
  
      </Routes>
    </Router>
  );
}

export default App;
