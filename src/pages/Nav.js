import React, { useContext, useEffect } from "react";
import './Nav.css';
import { Link } from "react-router-dom";
import { Context } from "../context/OrderContext";
const Nav = () => {
  const {setSearchItem} = useContext(Context);
  
    return(
        <>
                        <div className="topNav" style={{width:'100%'}}>
                          <div className="logo-div">
                          <Link to="/"><img className="logoimages" src="/kk2.jpeg" alt="logo" /></Link>
                            
                          </div>
                          <div class="input-group-prepend searchdiv" style={{ display: 'flex' }}>
    <div class="input-group-text prepend-icon">
        <img class="searchImg" src="/search.svg" alt="Search Icon" />
    </div>
    <input type="text" onChange={(text)=>setSearchItem(text.target.value)} style={{paddingLeft:'50px'}} class="form-control searchbar" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
</div>

                           <div className="col-md-4 d-flex justify-content-end" style={{width:'30%'}}>
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}>
                            <img className="logoimages right-image" src="/globe.gif" />
                            <span className="w-text" style={{fontSize:'20px',fontWeight:'600'}}>Domestic & International Markets- Accessible worldwide and everywhere</span>
                            </div>
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