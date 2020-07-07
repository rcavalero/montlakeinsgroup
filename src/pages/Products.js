import React from "react";
import "../pages/styles/products.css";


function Products() {
    return (
     <div>   

            <div className="container products w-75 py-3">
            <h1>Products we Offer</h1>
                <div className="row">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="row no-gutters align-items-center">
                                <div className="col-xs-12 col-md-5 col-lg-4 h-100">
                                    <ul>
                                        <li> Homeowners</li>
                                        <li> Auto</li>
                                        <li> Umbrella</li>
                                    </ul>
                                    </div>
                                <div className="col-xs-12 col-md-7 col-lg-8">
                                <div className="card-header">
                                    <h5>Homeowners Insurance</h5>
                                    </div>
                                    <div className="card-body">
                                            
                                        <p className="card-text text-justify">Homeowner  Insurance ....  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
          
    
  )
}

export default Products;