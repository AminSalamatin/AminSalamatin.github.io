import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col bg-white min-h-full">
      <Navbar />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}
export default App;
