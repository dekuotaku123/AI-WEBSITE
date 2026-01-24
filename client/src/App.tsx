

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Preview from "./pages/Preview";
import Community from "./pages/Community";
import MyProjects from "./pages/MyProjects";
import View from "./pages/View";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/projects' element={<MyProjects/>}/>
        <Route path='/projects/:projectId' element={<Home/>}/>
        <Route path='/preview/:projectId' element={<Preview/>}/>
        <Route path='/preview/:projectId/:versioId' element={<Preview/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/view/:projectId' element={<View/>}/>
        
      </Routes>
    </div>
  );
}
