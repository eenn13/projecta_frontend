import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/pages/Home";
import { AboutMe } from "./components/pages/AboutMe/AboutMe";
import { Photos } from "./components/pages/Photos/Photos";
import { Posts } from "./components/pages/Posts/Posts";
import { DataEntry } from "./components/pages/DataEntry/DataEntry";
import { SendPhoto } from "./components/pages/SendPhoto/SendPhoto";
import { SendMail } from "./components/pages/SendMail/SendMail";

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/aboutme" element={<AboutMe/>} />
                <Route exact path="/photos" element={<Photos/>} />
                <Route exact path="/posts" element={<Posts/>} />
                <Route exact path="/dataentry" element={<DataEntry/>} />
                <Route exact path="/sendphoto" element={<SendPhoto/>} />
                <Route exact path="/sendmail" element={<SendMail/>} />
            </Routes>
        </Router>
    );
}