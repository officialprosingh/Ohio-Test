import React from "react";
import logo from "../images/logo.png"

const Footer = () =>{

    return(

        <div class="ui inverted vertical footer segment" style={{ marginTop:"650px"}}>
            <div class="ui center aligned container">
                <img src={logo} class="ui centered mini image" style={{width:"150px"}} />
                    <div class="ui horizontal inverted small divided link list">
                        <a class="item" href="#">Site Map</a>
                        <a class="item" href="#">Contact Us</a>
                        <a class="item" href="#">Terms and Conditions</a>
                        <a class="item" href="#">Privacy Policy</a>
                    </div>
            </div>
        </div>
    );

}

export default Footer;