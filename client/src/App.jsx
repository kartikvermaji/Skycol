import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/Login.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import NotFound from "./Pages/NotFound.jsx";

export default function App() {
  const auth=Boolean(useSelector((state) => state.token));



  return (
    <div>

      <BrowserRouter>
      <Routes>
      <Route path="*" element={<NotFound/>} />
         <Route path="/" element={<LoginPage/>}/>
         <Route
              path="/home"
              element={auth ?<Home/> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={auth ? <Profile/> : <Navigate to="/" />}
            />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}