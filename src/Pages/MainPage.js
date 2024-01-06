import React, { useState } from "react";
import {useEffect} from "react"; // Adjust the path as necessary
import Header from "../components/MainHeader"
import { useNavigate } from 'react-router-dom';
import { supabase } from "../supabaseClient"; // Adjust the path as necessary
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard"





function MainPage () {



    return(

        <div>

            <Header />

            <Dashboard />

        <Footer />

        </div>
    );
}

export default MainPage;