import React, { useEffect, useState } from "react";
import Bio from "../images/bio.png"
import { supabase } from "../supabaseClient"; // Adjust the path as necessary



function Dashboard () {
    const [userData, setUserData] = useState({ stage: '', name: '', health: '' });

    useEffect(() => {
        const user = supabase.auth.user();

        if (user) {
            const fetchUserData = async () => {
                const { data, error } = await supabase
                    .from('Game') // Adjust to your table name
                    .select('stage, name, health')
                    .eq('id', user.id)
                    .single();

                if (error) {
                    console.error('Error fetching profile:', error);
                } else {
                    setUserData(data);
                }
            };

            fetchUserData();
        }
    }, []);



    return (

        <div className="ui container center aligned" style={{ marginTop:"100px"}}>
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

                        <button className="ui blue right floated button">Next</button>


                    </div>
                </div>
            </div>
        </div>


    );

}

export default Dashboard;