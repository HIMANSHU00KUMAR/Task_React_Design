import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage.tsx"
import SignUpPage from "./pages/SignUpPage.tsx"
import SignInPage from './pages/SignInPage.tsx';
import UserLoggedinPage from './pages/UserLoggedinPage.tsx';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Cities table route */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/userloged" element={<UserLoggedinPage />} />
    </Routes>
  )
}

