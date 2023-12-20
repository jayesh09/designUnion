import "./App.css";
import NavBar from "./components/navBar/navBar.js";
import Intro from "./components/intro/into.js";
import OurServices from "./components/ourServices/ourServices.js"

function App() {
  return (
  <div className="App-header">
    <NavBar/>
    <Intro />
    <OurServices />
  </div>
  );
}

export default App;
