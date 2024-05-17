import React from "react";
import './WebFooter.css';
import { Link } from "react-router-dom";
export default function WebFooter(){
    return(
        <>
        <footer class="footer row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <img class="bi me-2 pl-4" src="./footer-nutri.png" width="400px" height="97px" />
      </a>
    </div>
    <div class="col-2 mb-3">
      <h5 class="heading text-white">Quick Links</h5>
      <ul class="nav flex-column">
        <li class="mb-1"><Link className="w-text-white nav-link" to="/">Home</Link></li>
        <li class="mb-1"><Link className="w-text-white nav-link" to="/aboutus">About Us</Link></li>
        <li class="mb-1"><Link className="w-text-white nav-link" to="/productPage">Products</Link></li>
        <li class="mb-1"><Link className="w-text-white nav-link" to="/contactus">Contact Us</Link></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5 class="heading text-white mb-3">Contact Us</h5>
      <ul class="nav flex-column">
        <div className="d-flex flex-direction-row align-items-center mb-2">
          <img src="/m.png" className="footer-icon"/>
        <li class="nav-item mb-2"><a href="#" class="nav-link w-text-white p-0">contact@Nutryfood.com</a></li>
        </div>
        <div className="d-flex flex-direction-row align-items-center mb-2">
        <img src="/p.png" className="footer-icon"/>
        <li class="nav-item mb-2"><a href="#" class="nav-link w-text-white p-0">+91 9392587332</a></li>
        </div>
        <div className="d-flex flex-direction-row mb-2">
          <div>
              <img src="/loc.png" className="footer-icon" />
          </div>
          <div>
<span className="w-text-white">Regis EXIM CC</span><br />
<span className="w-text-white">Near Sudheer Kaata</span><br />
<span className="w-text-white">Garladinne,Anantapur</span><br />
<span className="w-text-white">Andhra Pradesh,515731</span>
          </div>
        </div>
       </ul>
    </div>

    <div class="col mb-3">
      <h5 class="heading text-white mb-3">Social Media Links</h5>
      <ul class="nav flex-row gap-3">
        <li class="nav-item mb-2"><a href='https://www.linkedin.com/company/nutryfood'>
            <img className="component-38-icon" alt="" src="/component-38.svg" /></a></li>
        <li class="nav-item mb-2"><a href='https://twitter.com/Nutryfood_'>
            <img className="component-38-icon" alt="" src="/component-39.svg" /></a></li>
        <li class="nav-item mb-2"> <a href="https://www.instagram.com/nutryfood_/"><img className="component-38-icon" alt="" src="/component-40.svg" />
          </a></li>
        <li class="nav-item mb-2"><a href="https://www.facebook.com/NutryFoodIndustries/"> <img className="component-38-icon" alt="" src="/component-41.svg" />
          </a></li>
        <li class="nav-item mb-2"><a href=''>
            <img className="component-38-icon" alt="" src="/component-42.svg" />
          </a>
         </li>  
    </ul>
    </div>

    <div className="col-12 d-flex justify-content-center p-4">
  <span className="text-white">© 2024, NutryFood. All rights reserved.</span>
</div>  
  </footer>
 
        </>
    )
}
