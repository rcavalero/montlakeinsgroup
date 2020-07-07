import React from "react";

function Contact() {
  return (
      <div>
          <div className="container flex">
              <div className = "w-100 text-center">
              <h4>Contact Us</h4>

              </div>
            
            <div className="row inputbox">
                
                

                <div className="input-field col 12" >
                    <label htmlFor="Name">Name</label>
                    <input
                        // value={props.newRec.brand}
                        name="name"
                        // onChange={props.handleAddRecommendation}
                        id="Name"
                        type="text" />
                </div>
                </div>
                
                <div className="row inputbox">
                <div className="input-field col 12" >
                    <label htmlFor="Email">Email</label>
                    <input
                        // value={props.newRec.brand}
                        name="email"
                        // onChange={props.handleAddRecommendation}
                        id="Email"
                        type="email" />
                </div>
                </div>
                

                <div className="row inputbox">
                <div className="input-field " >
                    <label htmlFor="Subject">Subject: </label>
                    <input
                        // value={props.newRec.brand}
                        name="subject"
                        // onChange={props.handleAddRecommendation}
                        id="Submect"
                        type="text" />
                </div>
                </div>
                
                <div className="row inputbox">
                <div className="input-field col 12" >
                    <label htmlFor="Message">Message</label>
                    <input
                        // value={props.newRec.brand}
                        name="message"
                        // onChange={props.handleAddRecommendation}
                        id="Message"
                        type="textarea" />
                </div>
                </div>
                
                

                

                <div className="row inputbox">
                <div className="input-field col 12" >
                    <button className="btn btn-primary red accent-2"  >
                        Submit
                    </button>
                    </div>
                </div>
            </div>

      </div>
  )
}

export default Contact;