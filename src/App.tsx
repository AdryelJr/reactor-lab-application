import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/home/index";
import { Feed } from "./pages/feed/index";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
