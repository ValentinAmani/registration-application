import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Registration } from "./pages/registration";
import "./style/index.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<Registration />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
