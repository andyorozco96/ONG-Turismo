import Intro from "./components/Intro";
import Carousel from "./components/Carousel";
import Objectives from "./components/Objectives";
import Contact from "./components/Contact";
import SocialMedia from "./components/Socialmedia";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <Carousel />
      <Objectives />
      <Contact />
      <SocialMedia />
    </div>
  );
}

export default App;
