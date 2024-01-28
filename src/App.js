import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavComponents/Navbar";
import css from "./App.css"

import HomePage from "./Pages/HomePage";
import Compare from "./Pages/Compare";
import Dashboard from "./Pages/Dashboard";
import BackToTop from "./Components/BackToTop";
import CoinPage from "./Pages/CoinPage";
import WatchList from "./Pages/WatchList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Navbar/>
      <BackToTop/>
      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/compare" element={<Compare/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/coin/:id" element={<CoinPage/>}/>
        <Route path="/watchlist" element={<WatchList/>}/>
      </Routes>
    </>
  );
}

export default App;
