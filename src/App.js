// import logo from './logo.svg';
import "./App.css";
import NaviBar from "./components/mainPage/NaviBar";
import Landing from "./components/mainPage/Landing";
import GraphicalInfo1 from "./components/mainPage/GraphicalInfo1";
import GraphicalInfo2 from "./components/mainPage/GraphicalInfo2";
import GraphicalInfo3 from "./components/mainPage/GraphicalInfo3";
import GraphicalInfo4 from "./components/mainPage/GraphicalInfo4";
import ExiteNews from "./components/mainPage/ExiteNews";
import MainPageFaq from "./components/mainPage/MainPageFAQ";
import Footer from "./components/mainPage/Footer";

function App() {
  return (
    <div className="">
      <NaviBar />
      {/* <Landing /> */}
      <GraphicalInfo1 />
      <GraphicalInfo2 />
      <GraphicalInfo3 />
      <GraphicalInfo4 />
      <ExiteNews />
      <MainPageFaq />
      <Footer />
    </div>
  );
}

export default App;
