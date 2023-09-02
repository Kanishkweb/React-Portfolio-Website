import "./App.css";
import ScrollNavigation from "../src/component/ScrollNavigation";

import HeroSection01 from "./component/HeroSection01/HeroSection01";
import HeroSection02 from "./component/HeroSection02/HeroSection02";
import HeroSection03 from "./component/HeroSection03/HeroSection03";
import HeroSection04 from "./component/HeroSection04/HeroSection04";
import Resume from "./component/Resume/Resume";

function App() {
  return (
    <div className="App">
      <ScrollNavigation />
      <div id="section1">
        <HeroSection01 />
      </div>
      <div id="section5">
        <Resume />
      </div>
      <div id="section2">
        <HeroSection02 />
      </div>
      <div id="section3">
        <HeroSection03 />
      </div>
      <div id="section4">
        <HeroSection04 />
      </div>
    </div>
  );
}

export default App;
