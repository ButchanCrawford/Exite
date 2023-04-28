// import logo from './logo.svg';
import "./App.css";
import NaviBar from "./components/mainPage/NaviBar";
import Landing from "./components/mainPage/Landing";
import { Route, Routes } from "react-router-dom";
import Faq from "./components/Faq";
import Footer from "./components/mainPage/Footer";
import Careers from "./components/Careers";
import Subscription from "./components/subscriptions/Subscription";
import Press from "./components/Press";

function App() {
  return (
    <div className="">
      <NaviBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/learnmore" element={}/> */}
        <Route path="/careers" element={<Careers />} />
        {/* <Route path="/Theteam" element={}/> */}
        {/* <Route path="/blog" element={}/> */}
        <Route path="/subscribe" element={<Subscription />} />
        {/* <Route path="/about" element={}/>  */}
        {/* <Route path="/contact" element={}/>  */}
        <Route path="/press" element={<Press />} />
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
