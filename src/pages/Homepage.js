import React from "react";
import './Homepage.css'
import Globe from "./MobileViewIcon";
import ImageCarousel from "./imageScroller";
import AntScroller from "./antScroller";
const Homepage = () => {
    return(
        <div style={{width:'100%',overflow:'hidden'}}>
            <div className="row" style={{height:'20%'}}>
            <div className="nvimage">
            <Globe />
            </div>   
            <AntScroller />
            </div>
<div className="main mt-4" style={{width:'90%'}}>
          
            <div className="row matter-cont">
            <div className="col-md-6 text-div">
    <div className="text-sub-1">
        <span className="home-text">Crowned with Innovations</span>
        <span className="home-text-black">
            “Elevating Culinary Excellence”
        </span>
    </div>
</div>

<div className="col-md-6 text-div-2">
    <div className="row mb-3">
    <span className="home-i-text">Welcome to Nutryfood! We believe in blending tradition with innovation to make cooking easier and faster. Our smart research makes cooking simple and delicious. We want everyone to enjoy good food without the hassle.</span>
    </div>
    <div className="row mb-3">
    <span className="home-i-text">We mix new and old cooking methods to create amazing flavors in Indian cuisine. Our goal is to share authentic Indian food with the world while keeping it healthy and tasty.</span>
    </div>
    <div className="row mb-3">
    <span className="home-i-text">At Nutryfood, we make sure everyone can afford great food. Our solutions are budget-friendly for every kitchen. Come join us on a journey of tasty meals and innovative ideas, making every dining experience memorable.</span>
    </div>
</div>

            </div>
            
           
            </div>
    <div class="row mt-4 ml-1 mr-1 d-flex justify-content-center icons-images-web">
    <div class="col-md-2 col-sm-2 col-xs-4 col-4">
        <div class="k-sub-div">
            <div>
                <img class="k-image" src="/k1.png" />
            </div>
            <div class="text-k-div">
                <span class="text-k">Nutritionally superior option</span>
            </div>
        </div>
    </div>

    <div class="col-md-2 col-sm-4 col-xs-4 col-4">
        <div class="k-sub-div">
            <div>
                <img class="k-image" src="/n1.png" />
            </div>
            <div class="text-k-div">
                <span class="text-k">Ancient, time-honored methods</span>
            </div>
        </div>
    </div>

    <div class="col-md-2 col-sm-2 col-xs-4 col-4">
        <div class="k-sub-div">
            <div>
                <img class="k-image" src="/n2.png" />
            </div>
            <div class="text-k-div">
                <span class="text-k">No preservatives, pure freshness</span>
            </div>
        </div>
    </div>

    <div class="col-md-2 col-sm-2 col-xs-4 col-4">
        <div class="k-sub-div">
            <div>
                <img class="k-image" src="/n3.png" />
            </div>
            <div class="text-k-div">
                <span class="text-k">Accessible worldwide, everywhere</span>
            </div>
        </div>
    </div>

    <div class="col-md-2 col-sm-2 col-xs-4 col-4">
        <div class="k-sub-div">
            <div>
                <img class="k-image" src="/nn4.png" />
            </div>
            <div class="text-k-div">
                <span class="text-k">Affordable without sacrificing quality</span>
            </div>
        </div>
    </div>
</div>


            <div className="row d-flex justify-content-center">
                <img style={{width:'70%',height:'70%'}} src="/Special.png" />
            </div>
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center mb-3" >
                    <span className="headings">Who We Are?</span>
                </div>
                <div className="row d-flex align-items-center">
                <div className="col-md-6 d-flex justify-content-center whoimg">
                    <img className="who-img" src="/whoarewe.jpeg" />
                </div>
                <div className="col-md-6 who-text-div">
                    <div className="who-span row mr-2 ml-1">
                <span className="who-span-text">Welcome to Nutryfood, where culinary innovation meets tradition. With our supreme Research and Development, we've revolutionized cooking, turning hours of effort into minutes of convenience. Effortless Cooking is our mantra, where quality and convenience unite in every dish.
</span>
</div>
<div className="who-span row mr-2 ml-1">
<span className="who-span-text">
We redefine taste through Research Excellence, blending innovative techniques with traditional Indian flavors. Our mission is to share authentic Indian cuisine globally, without compromising on Nutrition, Quality, or Taste.
</span></div>
<div className="who-span row mr-2 ml-1">
<span className="who-span-text">
At Nutryfood, excellence is accessible to all, with cost-effective solutions for every kitchen. Join us on a journey where culinary creativity meets innovation, promising unforgettable dining experiences for all.</span><hr />
</div>
           </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center" style={{width:'100%'}}>
                <div className="col-12 d-flex justify-content-center mb-4">
                <span className="headings">Best Sellers</span>           
                </div>
                
                    <div className="row dummy">
                       
                    <div className="col-md-3 col-sm-4 col-xs-6 d-flex justify-content-center">
                        <div className="d-flex flex-column p-m" style={{width:"300px",height:'300px'}}>
                        <img className="img" src="/id1.png" />
                        <span className="p-t">Idly Powder</span>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-4 col-xs-6 d-flex justify-content-center">
                    <div className="d-flex flex-column p-m" style={{width:"300px",height:'300px'}}>
                        <img className="img" src="/id2.png" />
                        <span className="p-t">Dosa Powder</span>
                        </div>
                    </div>
                    
                    
                    <div className="col-md-3 col-sm-4 col-xs-6 d-flex justify-content-center">
                    <div className="d-flex flex-column p-m" style={{width:"300px",height:'300px'}}>
                        <img className="img" src="/id3.png" />
                        <span className="p-t">Millet Idly Powder</span>
                        </div>
                    </div>

                    
                    <div className="col-md-3 col-sm-4 col-xs-6 d-flex justify-content-center">
                    <div className="d-flex flex-column p-m" style={{width:"300px",height:'300px'}}>
                        <img className="img" src="/id4.png" />
                        <span className="p-t">Millet Dosa Powder</span>
                        </div>
                    </div>
                    
                    </div>

                    <div className="outer">
                    <div className="cont">
                       
                    <div className="sub-cont">
                    <div className="d-flex flex-column p-m" style={{width:"150px"}}>
                        <img style={{height:'100px'}} src="/id1.png" />
                        <span className="p-t" style={{fontSize:'12px'}}>Idly Powder</span>
                        </div>
                    </div>
                    
                    <div className="sub-cont">
                    <div className="d-flex flex-column p-m" style={{width:"150px"}}>
                        <img style={{height:'100px'}} src="/id2.png" />
                        <span className="p-t" style={{fontSize:'12px'}}>Dosa Powder</span>
                        </div>
                    </div>
                    </div>
                    <div className="cont">
                       
                    <div className="sub-cont">
                    <div className="d-flex flex-column p-m" style={{width:"150px"}}>
                        <img style={{height:'100px'}} src="/id3.png" />
                        <span className="p-t" style={{fontSize:'12px'}}>Millet Idly Powder</span>
                        </div>
                    </div>
                    
                    <div className="sub-cont">
                    <div className="d-flex flex-column p-m" style={{width:"150px"}}>
                        <img style={{height:'100px'}}  src="/id4.png" />
                        <span className="p-t" style={{fontSize:'12px'}}>Millet Dosa Powder</span>
                        </div>
                    </div>
                    </div>
                    </div>
                
            </div>
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center mb-4">
                <span className="headings">Certifications</span>
                </div>
                
                <div className="logos">
                    <div className="logos-slide">
            <img alt="" src="/image-71@2x.png" />
            
            <img alt="" src="/image-72@2x.png" />
            
            <img alt="" src="/image-73@2x.png" />
            
            <img alt="" src="/image-74@2x.png" />
            
            <img alt="" src="/image-75@2x.png" />
            
            <img alt="" src="/image-76@2x.png" />
            
            <img alt="" src="/image-77@2x.png" />
            
            <img alt="" src="/image-78@2x.png" />
            
            <img alt="" src="/image-79@2x.png" />
            </div>
          </div>
                
            </div>
            
        </div>
    )
}

export default Homepage;