import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from 'react-external-link';
import './Homepage.css';
const FooterPage = () => {
    return(
        <>
          <div className="p-3" style={{backgroundColor:'#004AAD',marginTop:'80px',width:'100%'}}>
          <img className="footer-nutri" src="/footer-nutri.png" />
            <div className="row m-3 footer-main">
            <div className="col-md-6">
            
            <div className="row">
            <ul className="d-flex mb-4 links mt-4">
        <li className="nav-item d-flex">
          <Link className="text-white nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="text-white nav-link" to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="text-white nav-link" to="/productPage">Products</Link>
        </li>
        <li className="nav-item">
        <Link className="text-white nav-link" to="/contactus">Contact Us</Link>
        </li>
            </ul>
            </div>
            <div className="row mb-4 d-flex align-items-center">
        <div className="row">
        <div className="col-md-6 d-flex gap-2 mb-3 f-ic">
          
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
        
        
        </div>
            </div>
            </div>
            <div className="col-md-6 d-flex flex-column footer-address" >
          <div className="row">
              <div className="col-12" style={{display:'flex',margin:0,padding:0,flexDirection:'column',justifyContent:'flex-start',gap:'10px'}}>
                
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                <img src="/p.png" className="footer-icon"/>
                </div>
                <div>
                <p className="footerText" style={{color:'white'}}>+91 9392587332</p>
                </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                  <div>
                <img src="/m.png" className="footer-icon"/>
                </div>
                <div>
                <p className="footerText" style={{color:'white'}}>contact@Nutryfood.com</p>
                </div>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                  <div>
                <img src="/loc.png" className="footer-icon"/>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                <div className="footerText-ad">
                <span className="footerText-ad" style={{color:'white'}}>Regis EXIM CC</span>
                </div>
                <div className="footerText-ad">
                <span className="footerText-ad" style={{color:'white'}}>Near Sudheer Kaata</span>
                </div>
                <div>
                <span className="footerText-ad" style={{color:'white'}}>Garladinne,Anantapur</span>
                </div>
                <div>
                <span className="footerText-ad" style={{color:'white'}}>Andhra Pradesh,515731</span>
                </div>
                </div>
                </div>
                

              </div>
            </div>

            </div>
            </div>
            <div className="row mt-3 d-flex justify-content-center">
            <span style={{fontWeight:'600',fontSize:'16px',color:'white',textAlign:'center'}}>© 2024, NutryFood. All rights reserved.</span>
         
            </div>
          </div>
          
        </>
    )
}

export default FooterPage;