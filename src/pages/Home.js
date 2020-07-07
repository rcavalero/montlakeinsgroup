import React from "react";
import "../pages/styles/home.css";


function Home() {
    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={require("../images/yourLogoHere.jpg")} className="logo py-4" alt="YourLogoHere"></img>
                    </div>
                </div>
            <div className="row">
                    <div className="col">
                    {/* <div className="col-xs-12 col-md-7 col-lg-8"> */}
                  <div className="card-body align-center">
                    <p className="card-text text-justify text-light">Full-Stack Web Developer with extensive insurance business systems operations and analysis experience.  Certified in Full-Stack web development from the University of Washington.  Proven ability to solve problems and increase efficiency for the user experience.  Bringing extensive knowledge of front office business experience to the web development process that includes configuring Agency Management Systems, managing databases, writing SQL based reports, managing business processes and creating advanced level Excel spreadsheets.
                    </p>
                  </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;