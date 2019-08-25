import React from 'react';
import '../assets/css/App.css';
import '../assets/css/HoverTech.css';

function TechUsed() {
    return (
        <div className="container">
            <div className="col-12"
                style={{
                    textAlign: "center",
                    paddingTop: "75px",
                    paddingBottom: "75px",
                    backgroundColor: "white"
                }}>

                <div>
                    <h1> Technology we use</h1>
                </div>

            </div>


            <div className="row">
                <div className="col-12" style={{ textAlign: "center", margin: "auto" }}>

                    <div style={{ display: "inline-block" }}>
                        <img className="techUsed" src={require("../assets/images/tech/tech1.jpg")} height="150px" alt="tech1" />
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <img className="techUsed" src={require("../assets/images/tech/tech1.jpg")} height="150px" alt="tech1" />
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <img className="techUsed" src={require("../assets/images/tech/tech1.jpg")} height="150px" alt="tech1" />
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <img className="techUsed" src={require("../assets/images/tech/tech1.jpg")} height="150px" alt="tech1" />
                    </div>

                    <div style={{ display: "inline-block" }}>
                        <img className="techUsed" src={require("../assets/images/tech/tech1.jpg")} height="150px" alt="tech1" />
                    </div>

                </div>
            </div>

        </div>

    )
}


export default TechUsed;