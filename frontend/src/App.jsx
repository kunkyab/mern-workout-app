import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
