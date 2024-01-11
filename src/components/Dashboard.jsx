import React, { useEffect, useState } from "react";
import Bio from "../images/bio.png";
import { supabase } from "../supabaseClient"; // Adjust the path as necessary



function Dashboard () {
    const [userData, setUserData] = useState({ stage: '', name: '', health: '' });
    const [emailId, setEmailId] = useState('');
    const getUser = async () => {
        const user = await supabase.auth.getUser();
        const emailid = user.data.user?.email;
        const { data, error } = await supabase.auth.getSession()
        console.log(data);
        if (user) {

            const userid = user.data.user?.id;
            setEmailId(emailid);
            if(emailId === ""){
                console.log("email is null");
            }
        }
    };

    const getUserData = async () => {
        const { data, error } = await supabase
            .from('Game')
            .select('*')
            .eq('email', emailId)
            .single();

        if (data) {
            setUserData({ stage: data.stage, name: data.name, health: data.health});
            console.log(data);
        }
        else{
            console.log(error);
        }
    }

    useEffect(() => {
        try {
            getUser();
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        try {
            if(emailId !== '') getUserData();
        } catch (error) {
            console.log(error);
        }
    }, [emailId]);



    return (

        <div className="ui container center aligned" style={{marginTop: "100px"}}>


            <div className="ui grid">
                <div className="four wide column">
                    <div className="ui labeled icon vertical menu">
                        <a className="item"><i className="home icon"></i> Home</a>
                        <a className="item"><i className="suitcase icon"></i> Backpack</a>
                        <a className="item"><i className="heartbeat icon"></i> Health</a>
                        <a className="item"><i className="map icon"></i> Map</a>
                        <a className="item"><i className="book icon"></i> Dossier</a>
                    </div>
                </div>



            <div className="twelve wide stretched column">
                <div className="ui segment">
                    <h2 className="ui right floated header" style={{marginTop: "25px"}}>
                        Hi {userData.name || 'Biologist'}!
                    </h2>

                    <img className="ui left floated header" src={Bio} style={{width: "80px"}}/>
                    <div className="ui clearing divider"></div>

                    <h4 className="ui right floated header">out of 100%</h4>
                    <h4 className="ui right floated header">{userData.health}%</h4>                        <h4
                    className="ui right floated header">Current Health:</h4>

                    <h4 className="ui left floated header">Hunting Permit Day:</h4>
                    <h4 className="ui left floated header">{userData.stage}</h4>

                    <div className="ui clearing divider"></div>

                    <div className="ui embed">


                        <iframe width="760" height="415"
                                src="https://www.youtube-nocookie.com/embed/5-Hx-UVjBlk?controls=0"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>

                    </div>

                    <div className="ui clearing divider"></div>

                    <button className="ui blue right floated button">

                        <a href="/awakening" style={{ color:"White"}} >
                            Next
                        </a>
                    </button>


                </div>
            </div>
        </div>
        </div>


    );

}

export default Dashboard;
