import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="flex flex-col min-h-full">
      <Navbar />
      <div className="flex-grow max-w-[80vh] mx-auto">
        <h2 className="pt-10">About me</h2>
        <p className="text-4xl mb-20 text-justify">
          Hello! I&apos;m Amin, a 21-year-old Software Development student with over seven
          years of programming experience. My expertise spans front-end and
          back-end development, and I&apos;ve also studied game development.
          Currently, I&apos;m focused on a software
          development career.
        </p>
        <Skills />
        <Portfolio />
        <Education />
      </div>
      <Footer />
    </div>
  );
}
export default App;
