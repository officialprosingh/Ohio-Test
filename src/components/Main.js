import React from "react";

const Main = () =>{
    return (
        <div class="ui inverted vertical footer segment" style={{marginTop: "90px"}}>
                <div className="ui text container" style={{marginTop: "100px", marginBottom:"100px", width: "100%"}}>
                    <h1 className="ui inverted header"> Imagine-a-Company </h1>
                    <h2>Do whatever you want when you want to.</h2>
                    <div className="ui huge primary button" >


                     < a href="./login" style={{color:"white"}}>Get Started</a>

                        <i className="right arrow icon"></i></div>
                </div>
        </div>

    )
        ;
}

export default Main;