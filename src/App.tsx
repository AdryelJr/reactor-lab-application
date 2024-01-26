import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/home/index";
import { Feed } from "./pages/feed/index";
import { SignIn } from './pages/SignIn';
import { Register } from './pages/Register';
import { ProfilePage } from './pages/ProfilePage';
import { UserProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/*" element={<SignIn />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
