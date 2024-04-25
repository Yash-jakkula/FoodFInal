import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import './footer.css'

const FooterPage = () => {
    return(
        <>
          <div className="p-5" style={{backgroundColor:'#004AAD',marginTop:'80px',width:'100%'}}>
            <div className="row mb-5">
                <div className="col-md-4">
                    <img style={{width:'70%',height:'100%'}} src="/footerIcon.png" />                    
                </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <img src="/whatsapp.png" style={{width:'50px',height:'50px'}}/>
                <p style={{color:'white',fontSize:'20px'}}>+91 9392587332</p>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <img src="/email.jpg" style={{width:'30px',height:'30px',borderRadius:'50px',marginRight:'10px'}}/>
               <p style={{color:'white',fontSize:'20px'}}>contact@Nutryfood.com</p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
            <ul className="d-flex mb-4" style={{listStyle:'none',gap:'20px'}}>
        <li className="nav-item">
          <Link className="text-white nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="text-white nav-link" to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link text-white" href="#">Products</a>
        </li>
        <li className="nav-item">
        <Link className="text-white nav-link" to="/contactus">Contact Us</Link>
        </li>
      </ul>

      <div className="row mb-4 d-flex align-items-center">
        <div className="row">
        <div className="col-md-6 d-flex gap-2 mb-3">
          
        <a href='https://www.linkedin.com/company/nutryfood'>
            <img className="component-38-icon" alt="" src="/component-38.svg" /></a>
            
            
          <a href='https://twitter.com/Nutryfood_'>
            <img className="component-38-icon" alt="" src="/component-39.svg" /></a>
            
            
          <a href="https://www.instagram.com/nutryfood_/"><img className="component-38-icon" alt="" src="/component-40.svg" />
          </a>
                   
          <a href="https://www.facebook.com/NutryFoodIndustries/"> <img className="component-38-icon" alt="" src="/component-41.svg" />
          </a>
          
          
          <a href=''>
            <img className="component-38-icon" alt="" src="/component-42.svg" />
          </a>
         
        </div>
        
        <div className="col-md-6 d-flex justify-content-center">
            <span style={{fontWeight:'600',fontSize:'16px',color:'white'}}>© 2024, NutryFood. All rights reserved.</span>
        </div>
        </div>
      </div>
            </div>
          </div>
        </>
    )
}

export default FooterPage;