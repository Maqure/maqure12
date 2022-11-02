import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "../CSS/Navbar.css";
import Maqure_Logo_Animation from "../Images/Maqure-Logo-Animation.mp4"


function Navbar(props) {
    const location = useLocation();
    const currentRoute = location.pathname;
    // console.log(currentRoute)

    function handleWhatWeDoClick() {
        document.getElementById("navbar_link_1").click();
        props.WhatWeDoRef.scrollIntoView();
    }
    function handleContactUsClick() {
        document.getElementById("navbar_link_1").click();
        props.ContactUsRef.current.scrollIntoView();
    }

    let previousWindowScrollYValue=0;
    var play_pause=0;
    let lock=0;
    // Function to determine whether screen is going up or down
    window.onscroll = ()=>{
        // console.log(parseFloat(document.getElementById("video_id").duration)/2);
        // console.log(window.scrollY);
        // console.log(previousWindowScrollYValue + "  " + window.scrollY + " " + play_pause);

        if((window.scrollY>previousWindowScrollYValue) && (lock===0) && (play_pause===0)){
            lock=1;
            // console.log("scroll down hua");
            document.getElementById("video_id").playbackRate=2;
            document.getElementById("video_id").play();
            document.getElementById("video_id").addEventListener("timeupdate",()=>{
                if(document.getElementById("video_id").currentTime >=  parseFloat(document.getElementById("video_id").duration)/2 && (play_pause===0)){
                    document.getElementById("video_id").pause();
                    play_pause=1;
                }
            })
        }
        else if((window.scrollY<previousWindowScrollYValue) && (lock===1) && (play_pause===1)){
            lock=0;
            // console.log("scroll up hua");
            document.getElementById("video_id").playbackRate=2;
            document.getElementById("video_id").play();
            document.getElementById("video_id").addEventListener("timeupdate",()=>{
                if(document.getElementById("video_id").currentTime >= parseFloat(document.getElementById("video_id").duration) && (play_pause ===1 )){
                    document.getElementById("video_id").pause();
                    play_pause=0;
                }
            })
        }
        previousWindowScrollYValue = window.scrollY;
    }

    const hamburger_menu_click = ()=>{
        document.getElementById("hamburger_toggler").click();
    };
    
  return (
    <>
    <nav id="navbar" className="navbar">
        <div className="navbar_subpart_1">
            <Link to="/">
                <video muted preload="true" id="video_id">
                    <source src={Maqure_Logo_Animation} type="video/mp4"/>
                    <p>Video is Not Supported on your Device.</p>
                </video>    
            </Link>
        </div>
        <div className="navbar_subpart_2 display_none_to_mobile">
            <Link to="/" className={currentRoute === "/" ? "navbar_link_1 active_button_color" : "navbar_link_1"} id="navbar_link_1" >Home</Link>
            <Link to="/#what_we_do" className={currentRoute === "#" ? "navbar_link_2 active_button_color" : "navbar_link_2"} id="navbar_link_2" onClick={handleWhatWeDoClick}>What we do?</Link>
            <Link to="/Buyers" className={currentRoute.includes("/Buyers") ? "navbar_link_3 active_button_color" : "navbar_link_3"} id="navbar_link_3">Buyers</Link>
            <Link to="/Sellers" className={currentRoute.includes("/Sellers") ? "navbar_link_4 active_button_color" : "navbar_link_4"} id="navbar_link_4">Sellers</Link>
            {/* <Link to="/AboutUs" className={currentRoute.includes("/AboutUs") ? "navbar_link_5 active_button_color" : "navbar_link_5"} id="navbar_link_5">About Us</Link> */}
        </div>
        <div className="navbar_subpart_3 display_none_to_mobile">
            <a href="/#contact_us" onClick={handleContactUsClick} id="partner_with_us">Partner with Us</a>
        </div>
        
        {/* Hamburger */}

        <div className="menu-wrap display_none_to_desktop">
            <input type="checkbox" className="toggler" id="hamburger_toggler"/>
            <div className="hamburger">
                <div>
                </div>
            </div>
            <div className="menu" id="hamburger_menu">
                <div>
                    <div>
                        <ul>
                            <li><Link to="/" onClick={hamburger_menu_click} id="navbar_link_1">Home</Link></li>
                            <hr/>
                            <li><Link to="/#what_we_do" onClick={(event)=>{hamburger_menu_click();handleWhatWeDoClick();}} id="navbar_link_2" >What we do?</Link></li>
                            <hr/>
                            <li><Link to="/Buyers" onClick={hamburger_menu_click} id="navbar_link_3">Buyers</Link></li>
                            <hr/>
                            <li><Link to="/Sellers" onClick={hamburger_menu_click} id="navbar_link_4">Sellers</Link></li>
                            <hr/>
                            {/* <li><Link to="/AboutUs" onClick={hamburger_menu_click} id="navbar_link_5">About Us</Link></li> */}
                            {/* <hr/> */}
                            <li><Link to="/#contact_us" className="partner_with_us_button_hamburger contact_us_button" onClick={(event)=>{hamburger_menu_click();handleContactUsClick();}}>Partner With Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div  className="chat_widget"><Link to="/chat"><i className="fa-solid fa-message"></i></Link></div>
    </>
  )
}

export default Navbar