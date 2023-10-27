import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfilePerson from "./pages/ProfilePerson";
import { useState } from "react";
import data from "./data";
import Profilepage from "./pages/Profilepage";
import UserProfile from "./pages/UserProfile";
function App() {
  const informations = data;
  const [isLogedIn , setIsLogedIn ] = useState(false);
  return (
    <div className="snap-none App bg-[#E0FBFC]">
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home informations={informations}/>}/>
        <Route path = "/login" element={<Login isLogedIn= {isLogedIn} setIsLogedIn={setIsLogedIn}/>}/>
        <Route path = "/signup" element={<Signup isLogedIn= {isLogedIn} setIsLogedIn={setIsLogedIn} />}/>
        <Route path = "/profilePerson" element = {<ProfilePerson informations={informations} isLogedIn= {isLogedIn} setIsLogedIn={setIsLogedIn}/>}/>
        <Route path = "/profile" element = {<Profilepage informations = {informations}/>}/>
        <Route path = "/userprofile" element = {<UserProfile informations={informations}/>}/>
      </Routes>

    </div>
  );
}


export default App;
