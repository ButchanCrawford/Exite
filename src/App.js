// import logo from './logo.svg';
import "./App.css";
import NaviBar from "./components/mainPage/NaviBar";
import Landing from "./components/mainPage/Landing";
import { Route, Routes } from "react-router-dom";
import Faq from "./components/Faq";
import Footer from "./components/mainPage/Footer";

function App() {
  return (
    <div className="">
      <NaviBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/learnmore" element={}/> */}
        {/* <Route path="/carrers" element={}/> */}
        {/* <Route path="/Theteam" element={}/> */}
        {/* <Route path="/blog" element={}/> */}
        {/* <Route path="/subscription" element={}/> */}
        {/* <Route path="/about" element={}/>  */}
        {/* <Route path="/contact" element={}/>  */}
        {/* <Route path="/press" element={}/>  */}
        {/* <Route path="/careers" element={}/>  */}
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/whatsnext" element={}/>  */}
        {/* <Route path="/gooddaypolicy" element={}/>  */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
