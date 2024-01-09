import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Login.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginBg from "../images/LoginBgImage.png";
import { supabase } from "../supabaseClient";



function LoginPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) throw error;
            console.log(data);
            alert("Login Successfull")
            navigate("/home");
        }
        catch (error) {
            alert(error.error_description || error.message)
        }

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