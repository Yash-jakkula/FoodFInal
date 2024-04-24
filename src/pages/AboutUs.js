import React from 'react'
import './aboutus_styles.css';
import { Link } from "react-router-dom"
import { ExternalLink } from 'react-external-link';
import Vector1 from "../assets/Vector1.png"
import Vector2 from "../assets/Vector2.png"
import Vector3 from "../assets/Vector3.png"
import Vector4 from "../assets/Vector4.png"
import Vector5 from "../assets/Vector5.png"
import Vector6 from "../assets/Vector6.png"
import Vector7 from "../assets/Vector7.png"
import Vector8 from "../assets/Vector8.png"

function Aboutus() {
  return (
    <>
        <div>
          <div className='row d-flex justify-content-center mt-4'>
            <div className='col-md-4 d-flex justify-content-center'>
              <div class="card" style={{width: '80%',borderStyle:'none'}}>
   <img className="card-img-top" src="/image1.png" alt="Card image cap" /> 
  <div class="card-body">
    <h5 class="card-title">Standing Foundation</h5>
    <p class="card-text">Our goal is global expansion, 
    ensuring all Indians worldwide enjoy 
    the taste and health benefits of Indian cuisine. 
    We achieve this through partnerships with Indian 
    restaurants worldwide, maximizing NutryFood Industries' reach.</p>
  </div>
</div>
            </div>

            <div className='col-md-4 d-flex justify-content-center'>
              <div class="card" style={{width: '80%',borderStyle:'none'}}>
   <img className="card-img-top" src="/image2.png" alt="Card image cap" /> 
  <div class="card-body">
    <h5 class="card-title">Branching Principles</h5>
    <p class="card-text">We uphold unwavering commitment to quality, standards, traditional cooking methods, preserving nutrients, health benefits, and the personal touch that our customers cherish.</p>
  </div>
</div>
            </div>

            <div className='col-md-4 d-flex justify-content-center'>
              <div class="card" style={{width: '80%',borderStyle:'none'}}>
   <img className="card-img-top" src="/fruit.jpeg" style={{borderRadius:'10px'}} alt="Card image cap" /> 
  <div class="card-body">
    <h5 class="card-title">Fruitful Results</h5>
    <p class="card-text">We continue our mothers' legacy by offering NutryFood
     to present and future generations, ensuring the tradition lives on.</p>
  </div>
</div>
            </div>

          </div>         
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <span style={{color:'#000000',fontWeight:'600',fontSize:'20px'}}>Our journey</span>
            </div>
            <div className='col-12 d-flex justify-content-center mt-5'>
              <img className='journeyimg' style={{width:"90%",height:'100%'}} src='/journey.png' />
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-md-6 d-flex justify-content-center'>
              <img style={{width:'75%',height:'90%'}} src='/mission.png' />
            </div>
            <div className='col-md-6 d-flex justify-content-center'>
              <img style={{width:'75%',height:'90%'}} src='/vision.png' />
            </div>
          </div>

          <div className='row d-flex justify-content-center'>
            <div className='col-12 d-flex justify-content-center mt-5'>
              <span style={{fontWeight:'600px',fontSize:'20px',color:'#000000'}}>Core Values</span>
            </div>
            <div className='row d-flex justify-content-center mt-4' style={{width:'80%'}}>
            <div className='col-md-4 center-div'>
              <img className='s-image' src='/innovation.png' />
            </div>
            <div className='col-md-4 center-div'>
              <img className='s-image' src='/intigirity.png' />
            </div>
            <div className='col-md-4 center-div'>
              <img className='s-image' src='/excellence.png' />
            </div>
            <div className='col-md-4 center-div'>
              <img className='s-image' src='/inclusive.png' />
            </div>
            <div className='col-md-4 center-div'>
              <img className='s-image' src='/sustain.png' />
            </div>
            </div>
          </div>

          <div className='row'>
          <div className='col-12 d-flex justify-content-center mb-5'>
            <p class="card-title" style={{fontWeight:'600',fontSize:'20px'}}>Founders</p>
          </div>
            <div className='col-12 d-flex justify-content-center'>
            <div class="row d-flex flex-direction-row" style={{width:'80%'}}>
              <div className='col-md-6 f1'>
  <img class="card-img-top" src="/f1.png" alt="Card image cap" style={{height:'100%',width:'100%'}}/>
  </div>
  <div class="col-md-6">
    <h5 class="card-title" style={{fontSize:'32px'}}>Nanda Kishore Reddy<span style={{color:'#004AAD',marginLeft:'3px',fontWeight:'600',fontSize:'20px'
}}>Co-Founder</span></h5>

    <p class="card-text"> Nanda Kishore Reddy,
     a visionary entrepreneur deeply rooted in Indian agriculture, 
     founded his first company, Regis EXIM, 
     at the age of 21. Born into a farming family, 
     he understood the hardships of the agricultural community. 
     At 24, he co-founded Nutryfood with a mission to revolutionize the 
     culinary landscape. 
     His relentless drive 
     led to the transformation 
     of complex cooking processes into effortless tasks. 
     His vision remains clear:harmonize cutting-edge innovation with traditional 
     Indian flavors, ensuring convenience, quality, and culinary excellence for all. 
     Nanda Kishore Reddy's story epitomizes resilience and innovation, 
     reflecting in Nutryfood's mission to
     redefine taste through research excellence and 
     unwavering commitment to supreme quality.</p>
  </div>
            </div>
            </div>

            <div className='col-12 d-flex justify-content-center mt-4 mb-5'>
            <div class="row f2-row" style={{width:'80%'}}>
              <div className='col-md-6 f1'>
  <img class="card-img-top" src="/f2.png" alt="Card image cap" style={{height:'100%',width:'100%'}}/>
  </div>
  <div class="col-md-6">
    <h5 class="card-title" style={{fontSize:'32px'}}>Dr. Yalaka Nandini<span style={{color:'#004AAD',marginLeft:'3px',fontWeight:'600',fontSize:'20px'
}}>Co-Founder</span></h5>

    <p class="card-text">"With a decade of experience in Agricultural Engineering Research, Dr. Yalaka Nandini has pioneered various farming technologies for both small and large-scale farmers. Her deep-rooted understanding of food's importance led her to believe that it's pivotal for human health and prosperity. Motivated by this belief and a desire to offer high-quality, nutritious food with traditional values to those purchasing and consuming food products, she founded Nutry Food. Dr. Nandini ensures quality standards and oversees overseas the company."</p>
  </div>
            </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
            <span style={{fontWeight:'600px',fontSize:'20px',color:'#000000'}}>Core Values</span>
            </div>
            <div className='col-12 d-flex justify-content-center'>
              <div className='row' style={{width:'90%'}}>
                <div className='col-md-3 col-div-main'>
                  <img src='/b1.png' className='col-div'/>
                </div>
                <div className='col-md-3 col-div-main'>
                  <img src='/b2.png' className='col-div'/>
                </div>
                <div className='col-md-3 col-div-main'>
                  <img src='/b3.png' className='col-div'/>
                </div>
                <div className='col-md-3 col-div-main'>
                  <img src='/b4.png' className='col-div'/>
                </div>
              </div>
            </div>

            <div className='col-12 d-flex justify-content-center mt-4'>
              <div className='row' style={{width:'90%'}}>
                <div className='col-md-3 col-div-main'>
                  <img src='/b5.png' className='col-div'/>
                </div>
                <div className='col-md-3 col-div-main'>
                  <img src='/b6.png' className='col-div'/>
                </div>
                <div className='col-md-3 col-div-main'>
                  <img src='/b7.png' className='col-div'/>
                </div>
                <div className='col-md-3 col-div-main'>
                  <img src='/b8.png' className='col-div'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Aboutus