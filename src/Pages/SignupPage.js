import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import
import { supabase } from "../supabaseClient"; // Adjust the path as necessary
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginBg from "../images/LoginBgImage.png";
import {useEffect} from "react"; // Adjust the path as necessary


function SignupPage() {
    const navigate = useNavigate(); // Updated hook
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        world: '',
        health: '',
        stage: '',
        password: ''
    });




    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Sign up the user using Supabase Auth
        const { user, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
        });

            const { data, insertError } = await supabase
                .from('Game') // Replace with your table name
                .insert([{
                    name:formData.name,
                    username: formData.username,
                    email:formData.email,
                    password:formData.password,
                    world: formData.world,
                    health: formData.health,
                    stage: formData.stage
                    // Add other fields as necessary
                }]);

            if (insertError) {
                alert(insertError.message);
            } else {
                // Navigate to the home page on successful sign-up and profile creation
                navigate('/home');
            }
        }


    return (
        <div>
            <Header />
            <div className="ui vertical stripe segment" style={{ marginTop: "150px" }}>
                <div className="ui middle aligned stackable grid container">
                    <div className="row">
                        <div className="eight wide column">
                            <h2> Sign Up</h2>
                            <form className="ui form" onSubmit={handleSubmit}>
                                <div className="field">
                                    <label>Name</label>
                                    <input type="text" name="name" placeholder="Display Name" onChange={handleChange} />
                                </div>

                                <div className="field">
                                    <label>Email</label>
                                    <input type="text" name="email" placeholder="Email" onChange={handleChange}  />
                                </div>

                                <div className="field">
                                    <label>Username</label>
                                    <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                                </div>

                                <div className="field">
                                    <label>World</label>
                                    <input type="text" name="world" placeholder="World" onChange={handleChange}  />
                                </div>

                                <div className="field">
                                    <label>Health</label>
                                    <input type="number" name="health" placeholder="Health" onChange={handleChange} />
                                </div>

                                <div className="field">
                                    <label>Stage</label>
                                    <input type="text" name="stage" placeholder="Stage" onChange={handleChange}  />

                                </div>


                                <div className="field">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                                </div>

                                <button className="ui button blue">Submit</button>
                            </form>
                        </div>
                        <div className="six wide right floated column">
                            <img src={LoginBg} alt="Login Background"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default SignupPage;
