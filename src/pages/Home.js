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
                    <p className="card-text text-justify text-light">
                       Aliqua minim fugiat aute duis. Consequat labore velit est eu. Deserunt id consequat magna quis. Magna laboris incididunt dolor fugiat irure velit et reprehenderit. Occaecat ipsum irure labore nostrud irure irure. Pariatur consequat aliqua cupidatat et mollit. Proident magna deserunt sint laborum ex duis nostrud esse culpa enim ullamco proident voluptate.

In laborum incididunt magna nisi do ex magna. Adipisicing ut ipsum ad velit aute. Occaecat sint officia commodo officia ipsum proident Lorem in. Anim sunt sit elit aliquip cillum irure. Qui proident et consectetur aliqua.

Dolore proident sint dolore ad enim labore dolore voluptate minim pariatur. Anim esse sunt occaecat incididunt ea quis esse veniam excepteur ipsum proident. Enim consequat do fugiat cillum culpa sunt. Non amet ut Lorem incididunt est consectetur consequat tempor quis Lorem nulla nisi ex veniam. Elit culpa officia ad ea occaecat pariatur ipsum aute ipsum qui dolore. 
                    </p>
                  </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;