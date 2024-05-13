import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TechnicalExperience from "./components/TechnicalExperience";

function App() {
  return (
    <div className="flex flex-col bg-white min-h-full">
      <Navbar />
      <div className="flex-grow">
        <TechnicalExperience />
      </div>
      <Footer />
    </div>
  );
}
export default App;
