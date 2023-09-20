import "./App.css";
import Header from "./components/header";
import Welcome from "./components/welcome";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <About />
      <Skills />
      {/* <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
