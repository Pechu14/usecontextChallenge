import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';


const RoutesApp = () => {
    return (
        <Router>
            <nav>
                <Link to ='/'>Home</Link>
                <Link to ='/MyJob'>MyJob</Link>
                <Link to ='/Profile'>Profile</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/MyJob' element={<MyJob />} />
                <Route path='/Profile' element={<Profile />} />

            </Routes>
        </Router>
        
        
    )
}

export default RoutesApp;