import { Route, Router } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./pages/profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  );
}

export default App;
