import React from "react";
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <>
        
                    
                        <div className="topNav" style={{width:'100%'}}>
                          <div className="logo-div">
                            <img className="logoimages" src="/l2.jpeg" alt="logo" />
                          </div>
                            <div class="input-group-prepend ml-5 searchdiv" style={{display:'flex'}}>
                                <span class="input-group-text" id="basic-addon1"><img className="searchImg" src="/search.svg" /></span>
                                <input type="text" class="form-control searchbar" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" /> 
                           </div>
                           <div className="col-md-4 d-flex justify-content-end" style={{width:'30%'}}>
                            <img className="logoimages right-image" src="/l1.jpeg" />
                            <div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img className="icon-menu" src="/menu.png"/>
                            </button>
                            </div>
                           </div>

                            </div>

                       
        
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#004AAD'}}>
  <div className="container-fluid justify-content-end">
    
    
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