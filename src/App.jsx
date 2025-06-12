import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="flex flex-col min-h-full min-w-full">
      <Navbar />
      <div className="flex-grow mx-auto px-5 w-[89vw] lg:w-[60vw]">
        <h1 className="pt-10">About me</h1>
        <p className="text-3xl text-left">
        Hello! I&apos;m Amin, Software Development student with over five years of hands-on programming experience. 
        I specialize in full-stack development. 
        Currently, I am focused on advancing my career in software development.
        </p>
        <hr className="my-10"/>
        <Skills/>
        <Portfolio/>
        <Education/>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
