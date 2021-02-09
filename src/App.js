import About from "./comps/sections/About";
import Assets from "./comps/sections/Assets";
import Footer from "./comps/sections/Footer";
import Hobbies from "./comps/sections/Hobbies";
import Projects from "./comps/sections/Projects";
import Skills from "./comps/sections/Skills";
import Training from "./comps/sections/Training";
import Socials from "./comps/Socials";

import { isMobile } from "react-device-detect";

function App() {

  if (1)
    return (
      <div className="app-main-ctn">
        <About />
        <Projects />
        <Skills />
        <Training />
        <Assets />
        <Hobbies />
        <Socials />
        <Footer />
      </div>
    );
  // else
  //     return (
  //       <div className="mobile-view">
  //         <p>My portfolio is not responsive yet but it shortly will !</p>
  //       </div>
  //     )
}

export default App;
