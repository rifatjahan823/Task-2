import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Navebar from './Components/Navbar/Navebar';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Navebar></Navebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
