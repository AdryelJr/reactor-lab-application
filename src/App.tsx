import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/home/index";
import { Feed } from "./pages/feed/index";
import { SignIn } from './pages/SignIn';
import { Register } from './pages/Register';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
