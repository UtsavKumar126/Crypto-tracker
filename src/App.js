import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import css from "./App.css"
import HomePage from "./Pages/HomePage";
import Compare from "./Pages/Compare";


function App() {
  return (
    <div style={{
      position:"sticky"
    }}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/compare" element={<Compare/>}/>
      </Routes>
    </div>
  );
}

export default App;
