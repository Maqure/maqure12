import React from 'react'
import "../src/CSS/Universal.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';
import Buyers from './components/Buyers';
import Sellers from './components/Sellers';
import ErrorPage from './components/ErrorPage';
import GetCreditPage from './components/GetCreditPage';
import ScrollToTop from './components/ScrollToTop';
import Chat from "./components/Chat"

function App() {
  return (
    <>
          <Router>
            <ScrollToTop/>
            <Navbar/>

            <Routes>

              <Route exact path="/" element={<HomePage />}></Route>

              {/* <Route exact path="/WhatWeDo" element={<WhatWeDo/>}></Route> */}

              <Route exact path="/Buyers" element={<Buyers/>}></Route>
              <Route exact path="/Sellers" element={<Sellers/>}></Route>
              <Route exact path="/chat" element={<Chat/>}></Route>
              {/* <Route exact path="/AboutUs" element={<AboutUs/>}></Route> */}
              <Route exact path="/GetCreditPage" element={<GetCreditPage/>}></Route>

              {/* For Error 404 Page when someone enters random url */}
              <Route path="*" element={<ErrorPage/>}></Route>
             

            </Routes>

            <Footer/>
          </Router>

    </>
  );
}

export default App;
