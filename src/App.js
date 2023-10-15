import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header  from "./components/Header/Header"
import Home from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Corsine } from "./components/Corsine/Corsine";
import { Menu } from "./components/Menu/Menu";
import { Chose } from "./components/Menu/Chose/Chose";
import { Admin } from "./components/Admin/Admin";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/corsine" element={<Corsine/>}/>

          <Route path="/menu/pizza" element={<Chose loadpage='#1'/>} />
          <Route path="/menu/shaurma" element={<Chose loadpage='#2'/>} />
          <Route path="/menu/soup" element={<Chose loadpage='#3'/>} />
          <Route path="/menu/fries" element={<Chose loadpage='#4'/>} />
          <Route path="/menu/salad" element={<Chose loadpage='#5'/>} />
          <Route path="/menu/wok" element={<Chose loadpage='#6'/>} />
          <Route path="/menu/drinks" element={<Chose loadpage='#7'/>} />
          <Route path="/menu/rolls" element={<Chose loadpage='#8'/>} />
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

