import React from "react";
import Home from "../images/home@2x.png"
import Backpack from "../images/backpack@2x.png"
import Health from "../images/heart-with-pulse@2x.png"
import Map from "../images/map@2x.png"
import Dossier from "../images/user@2x.png"



function Dashboard () {


    return (

        <div className="ui container center aligned" style={{ marginTop:"100px"}}>
            <div className="ui grid">
                <div className="four wide column">
                    <div className="ui vertical menu">


                        <div className="item">
                            <img className="ui small image" src={Home} style={{ width:"50px", height:"50px"}}/>
                            <div className="content">Home</div>
                        </div>

                        <div className="item">
                            <img className="ui small image" src={Backpack} style={{ width:"50px", height:"50px"}}/>
                            <div className="content">Backpack</div>
                        </div>

                        <div className="item">
                            <img className="ui small image" src={Health} style={{ width:"50px", height:"50px"}}/>
                            <div className="content">Health</div>
                        </div>

                        <div className="item">
                            <img className="ui small image" src={Map} style={{ width:"50px", height:"50px"}}/>
                            <div className="content">Map</div>
                        </div>

                        <div className="item">
                            <img className="ui small image" src={Dossier} style={{ width:"50px", height:"50px"}}/>
                            <div className="content">Dossier</div>
                        </div>


                    </div>
                </div>
                <div className="twelve wide stretched column">
                    <div className="ui segment">
                        <h1 className="ui header">Hi, Biologist!</h1>
                    </div>
                </div>
            </div>
        </div>


    );

}

export default Dashboard;