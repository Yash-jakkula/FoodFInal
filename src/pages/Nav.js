import React from "react";
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <>
        <div className="navbar">
            <div className="row navbar-main-row">
                <div className="col-12 navbar-col-1">
                    <div className="row nav-row-1">
                        <div className="col-md-4">
                            <img className="logoimages" src="/nutriFoodLogo.png" alt="logo" />
                        </div>
                        <div className="col-md-4">
                          
                        </div>
                        <div className="col-md-4 d-flex justify-content-end">
                            <img className="logoimages" src="/navimage.png" />
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#004AAD'}}>
  <div className="container-fluid justify-content-end">
    
    <button className="navbar-toggler" style={{backgroundColor:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color:'white'}}></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-2 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="text-white nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="text-white nav-link" to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="text-white nav-link" to="/ProductPage">Products</Link>
        </li>
        <li className="nav-item">
        <Link className="text-white nav-link" to="/ContactUs">ContactUs</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Nav;