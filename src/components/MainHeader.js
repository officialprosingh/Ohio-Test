import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../images/logo.png";
import { supabase } from "../supabaseClient";


const MainHeader = () =>{


    const navigate = useNavigate();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    // Optional: Check if the user is logged in
  ///  const user = supabase.auth.user();



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
                    <a className="ui inverted button" style={{marginRight: "15px", marginLeft: "50px"}} onClick={handleSignOut} >Sign Out</a>
                </div>

            </div>
        </div>


    );
}

export default MainHeader;