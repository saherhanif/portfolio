import "./App.css";
import Header from "./components/header";
import Welcome from "./components/welcome";
import About from "./components/about";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <About />
      <Skills />
      
    </div>
  );
}

export default App;
