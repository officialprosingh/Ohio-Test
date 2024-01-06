import React from "react";
import Home from "../images/home-icon.png"
import Backpack from "../images/backpack@2x.png"
import Health from "../images/heart-with-pulse@2x.png"
import Map from "../images/map@2x.png"
import Dossier from "../images/user@2x.png"
import logo from "../images/logo.png";
import Bio from "../images/bio.png"




function Dashboard () {


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
                        <h2 class="ui right floated header" style={{marginTop: "25px"}}>Hi Biologist!</h2>
                        <img className="ui left floated header" src={Bio} style={{width: "80px"}}/>
                        <div className="ui clearing divider"></div>

                    </div>
                </div>
            </div>
        </div>


    );

}

export default Dashboard;