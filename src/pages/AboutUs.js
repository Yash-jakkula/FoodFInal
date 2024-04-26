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
          <div className="nvimage" style={{backgroundColor:'#004AAD'}}>
                <img className="navp" src="/demo.png" />
                </div>
          <div className='row d-flex justify-content-center mt-4'>
            <div className='col-md-4 d-flex justify-content-center'>
              <div class="card" style={{width: '80%',borderStyle:'none'}}>
   <img className="card-img-top" src="/API 1.jpg" alt="Card image cap" /> 
  <div class="card-body">
    <h5 class="card-title">Standing Foundation</h5>
    <p class="card-text"> <span style={{fontWeight:'bold',fontSize:'16px'}}>“Growth across Globe”</span>
 To reach our beloved Indian 
residents in any corner of countries not to miss the 
taste and benefits of Indian food - trunking through 
Indian Restaurants to serve maximum number of 
people through “Our NutryFood Industries. </p>
  </div>
</div>
            </div>

            <div className='col-md-4 d-flex justify-content-center'>
              <div class="card" style={{width: '80%',borderStyle:'none'}}>
   <img className="card-img-top" src="/API 2.jpg" alt="Card image cap" /> 
  <div class="card-body">
    <h5 class="card-title">Branching Principles</h5>
    <p class="card-text">Not Compromising on Quality, Standards, Traditional 
method of preparation, Preserving Nutrients, Health 
benefits and our loved ones touch</p>
  </div>
</div>
            </div>

            <div className='col-md-4 d-flex justify-content-center'>
              <div class="card" style={{width: '80%',borderStyle:'none'}}>
   <img className="card-img-top" src="/API 3.jpg" style={{borderRadius:'10px'}} alt="Card image cap" /> 
  <div class="card-body">
    <h5 class="card-title">Fruitful Results</h5>
    <p class="card-text"><span style={{fontWeight:'bold',fontSize:'16px'}}>Carry the legacy of our Mothers </span>
 to present & future generations with our NutryFood</p>
  </div>
</div>
            </div>

          </div>         
          <div className='container-fluid'>
            
            <div className='col-12 d-flex justify-content-center'>
              <span style={{color:'#000000',fontWeight:'600',fontSize:'20px'}}>Our journey</span>
            </div>
            <div className='col-12 d-flex justify-content-center mt-4'>
                <span className='journeyText'>At the heart of Nutryfood's success is our strong focus on making food better through lots of testing and improving. We've made cooking much quicker and easier, turning long tasks into short ones, so you can spend less time in the kitchen. At Nutryfood, we're all
                   about making cooking effortless, where every dish is made with care and tastes amazing.</span>
            </div>
            <div className='col-12 d-flex justify-content-center mt-4'>
                <span className='journeyText'>We're really proud of what we do. Every bite you take shows how much we care about making food taste great. Nutryfood is all about bringing together new ideas with old ones to make food that's both tasty and good for you.</span>
            </div>
            <div className='col-12 d-flex justify-content-center mt-4'>
                <span className='journeyText'>We want everyone to enjoy the flavors of Indian food, no matter where they are. And we promise that when you choose Nutryfood, you're getting food that's good for you and tastes great. Plus, our solutions won't break the bank, so everyone can enjoy delicious meals. Come join us on this journey of tasty food and new ideas!</span>
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
              <span style={{fontWeight:'600',fontSize:'20px',color:'#000000'}}>Core Values</span>
            </div>
            <div className='row mt-4 w-c' style={{width:'80%'}}>
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
           <div className='m-c'>
            <div className='main-cont'>
            <div className='img-cont'>
              <img className='s-image' src='/innovation.png' />
            </div>
            <div className='img-cont'>
              <img className='s-image' src='/intigirity.png' />
            </div>
            </div>
            <div className='main-cont'>
            <div className='img-cont'>
              <img className='s-image' src='/excellence.png' />
            </div>
            <div className='img-cont'>
              <img className='s-image' src='/inclusive.png' />
            </div>
            </div>
            <div className='main-cont'>
            <div className='img-cont' style={{width:"50%"}}>
              <img className='s-image' src='/sustain.png' />
            </div>
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
    <h5 class="card-title card-text-div">Nanda Kishore Reddy<span className='span-text-div'>Co-Founder</span></h5>

    <p class="card-text card-sub-text"> Nanda Kishore Reddy,
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
    <h5 class="card-title card-text-div">Dr. Yalaka Nandini<span className='span-text-div'>Co-Founder</span></h5>

    <p class="card-text card-sub-text">"With a decade of experience in Agricultural Engineering Research, Dr. Yalaka Nandini has pioneered various farming technologies for both small and large-scale farmers. Her deep-rooted understanding of food's importance led her to believe that it's pivotal for human health and prosperity. Motivated by this belief and a desire to offer high-quality, nutritious food with traditional values to those purchasing and consuming food products, she founded Nutry Food. Dr. Nandini ensures quality standards and oversees overseas the company."</p>
  </div>
            </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
            <span style={{fontWeight:'600',fontSize:'20px',color:'#000000'}}>Our Team</span>
            </div>

            <div className='col-12 w-c'>
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

            <div className='col-12 w-c'>
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

            <div className='m-c' style={{marginTop:'10px'}}>
              <div className='main-cont'>
                <div className='img-cont'>
                  <img src='/b1.png' className='col-div'/>
                </div>
                <div className='img-cont'>
                  <img src='/b2.png' className='col-div'/>
                </div>
              </div>
              <div className='main-cont'>
              <div className='img-cont'>
                  <img src='/b3.png' className='col-div'/>
                </div>
                <div className='img-cont'>
                  <img src='/b4.png' className='col-div'/>
                </div>
                </div>
                <div className='main-cont'>
                <div className='img-cont'>
                  <img src='/b5.png' className='col-div'/>
                </div>
                <div className='img-cont'>
                  <img src='/b6.png' className='col-div'/>
                </div>
                </div>
                <div className='main-cont'>
                <div className='img-cont'>
                  <img src='/b7.png' className='col-div'/>
                </div>
                <div className='img-cont'>
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