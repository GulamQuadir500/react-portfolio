import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Work from "./component/Work";
import Resume from './component/Resume'


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Resume/>
      <Contact />
    </div>
  );
}

export default App;
