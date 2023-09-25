import "./App.css";
import Header from "./components/header";
import Welcome from "./components/welcome";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
