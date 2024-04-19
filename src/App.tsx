import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import SignInPage from './pages/SignInPage';
import UserLoggedinPage from './pages/UserLoggedinPage';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Cities table route */}
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/userloged" element={<UserLoggedinPage/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
