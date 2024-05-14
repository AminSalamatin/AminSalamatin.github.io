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
        <h3>About me</h3>
        <p className="text-4xl mb-20 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Portfolio />
        <Skills />
        <Education />
      </div>
      <Footer />
    </div>
  );
}
export default App;
