import React from "react";
import logo from "../images/logo.png";


const MainHeader = () =>{
    return (
        <div class="ui fixed inverted menu" >
            <div className="ui container">
                <a href="/" className="header item" style={{width: "150px"}}>
                    <img className="logo" src={logo} style={{width: "100px"}}/>
                </a>
                <a href="/" className="item">Home</a>
                <a href="#" className="item">About Us</a>
                <a href="#" className="item">Contact Us</a>

                <div className="right item">
                    <a className="ui inverted button" style={{marginRight: "15px", marginLeft: "50px"}} href="/">Sign Out</a>
                </div>

            </div>
        </div>


    );
}

export default MainHeader;