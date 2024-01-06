import "../Css/Login.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginBg from "../images/LoginBgImage.png"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import {useEffect} from "react"; // Adjust the path as necessary



function LoginPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const { user, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });


        supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') console.log('SIGNED_IN', session)
            navigate('/home');

        })

    };



    return(


        <div>
            <Header />

            <div className="ui vertical stripe segment" style={{ marginTop:"150px"}}>

                <div className="ui middle aligned stackable grid container">

                    <div className="row">

                        <div className="eight wide column">

                            <h2> Login !!</h2>

                            <form className="ui form" onSubmit={handleLogin}>

                                <div className="field">
                                    <label>Email</label>
                                    <input type="text" name="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>

                                <div className="field">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <button className="ui button blue">Submit</button>

                            </form>

                        </div>

                        <div className="six wide right floated column">
                            <img src={LoginBg} />
                        </div>


                    </div>


                </div>




            </div>




            <Footer />
        </div>



    );
}

export default LoginPage;