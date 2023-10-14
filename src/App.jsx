import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path ='/' element ={<Home/>}/>
       <Route path ='/sign-in' element ={<Signin/>}/>
       <Route path ='/sign-up' element ={<Signup/>}/>
       <Route path ='/profile' element ={<Profile/>}/>
       <Route path ='/about' element ={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}
