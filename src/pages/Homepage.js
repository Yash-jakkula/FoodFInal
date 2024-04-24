import React from "react";
import './Homepage.css'
const Homepage = () => {
    return(
        <div style={{width:'100%',overflow:'hidden'}}>
            <div className="row" style={{height:'20%'}}>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/i1.jpeg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:'500px'}} src="/i2.jpeg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:'500px'}} src="/i3.jpeg" alt="Third slide" />
    </div>
  </div>
</div>
            </div>
            <div className="row container matter-cont">
                <div className="col-md-6">
                    <span style={{color:'#004AAD',fontWeight:'bold',fontSize:'36px'
}}>Crowned with Innovations</span><hr />
<span style={{color:'#000000',fontWeight:'bold',fontSize:'20px'
}}>“Elevating Culinary Excellence”</span>
                </div>
                <div className="col-md-6">
                <span style={{color:'#000000B2',fontWeight:'600',fontSize:'20px'
}}>Welcome to Nutryfood! We believe in blending tradition with innovation to make cooking easier and faster. Our smart research makes cooking simple and delicious. We want everyone to enjoy good food without the hassle</span><hr />
<span style={{color:'#000000B2',fontWeight:'600',fontSize:'20px'
}}>
We mix new and old cooking methods to create amazing flavors in Indian cuisine. Our goal is to share authentic Indian food with the world while keeping it healthy and tasty.</span><hr />
<span style={{color:'#000000B2',fontWeight:'600',fontSize:'20px'
}}>
At Nutryfood, we make sure everyone can afford great food. Our solutions are budget-friendly for every kitchen. Come join us on a journey of tasty meals and innovative ideas, making every dining experience memorable</span><hr />
                </div>
            </div>
            <div className="row m-4">
                <img src="/Details.png" />
            </div>
            <div className="row d-flex justify-content-center">
                <img style={{width:'70%',height:'70%'}} src="/Special.png" />
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center" >
                    <span style={{fontWeight:'600',fontSize:'20px',color:'#000000'}}>Who We Are?</span>
                </div>
                <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img style={{width:'80%',height:'80%'}} src="/whowe.jpeg" />
                </div>
                <div className="col-md-6">
                <span style={{color:'#000000B2',fontWeight:'600',fontSize:'20px'
}}>Welcome to Nutryfood, where culinary innovation meets tradition. With our supreme Research and Development, we've revolutionized cooking, turning hours of effort into minutes of convenience. Effortless Cooking is our mantra, where quality and convenience unite in every dish.
</span><hr />
<span style={{color:'#000000B2',fontWeight:'600',fontSize:'20px'
}}>
We redefine taste through Research Excellence, blending innovative techniques with traditional Indian flavors. Our mission is to share authentic Indian cuisine globally, without compromising on Nutrition, Quality, or Taste.
</span><hr />
<span style={{color:'#000000B2',fontWeight:'600',fontSize:'20px'
}}>
At Nutryfood, excellence is accessible to all, with cost-effective solutions for every kitchen. Join us on a journey where culinary creativity meets innovation, promising unforgettable dining experiences for all.</span><hr />
                </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center" style={{width:'100%'}}>
                <div className="col-12 d-flex justify-content-center">
                <span style={{fontWeight:'600',fontSize:'20px',color:'#000000'}}>Best Sellers</span>           
                </div>
                <div className="row mt-4 d-flex justify-content-center" style={{width:'90%',display:'flex',justifyContent:'center'}}>
                <div className="col-md-6 col-lg-3">
                    <img className="best-seller-image" src="BestSellers.png" /><hr/>
                    <span>Ready to make Dosa Powder</span>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 col-lg-3">
                    <img className="best-seller-image" src="BestSellers.png" /><hr/>
                    <span>Ready to make Dosa Powder</span>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 col-lg-3">
                    <img className="best-seller-image" src="BestSellers.png" /><hr/>
                    <span>Ready to make Dosa Powder</span>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 col-lg-3">
                    <img className="best-seller-image" src="BestSellers.png" /><hr/>
                    <span>Ready to make Dosa Powder</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center m-4">
                <span style={{fontWeight:'600',fontSize:'20px',color:'#000000'}}>Certifications</span>
                </div>
                
                <div className="image-container">
            <img alt="" src="/image-71@2x.png" />
            <img alt="" src="/image-71@2x.png" />
            <img alt="" src="/image-72@2x.png" />
            <img alt="" src="/image-72@2x.png" />
            <img alt="" src="/image-73@2x.png" />
            <img alt="" src="/image-73@2x.png" />
            <img alt="" src="/image-74@2x.png" />
            <img alt="" src="/image-74@2x.png" />
            <img alt="" src="/image-75@2x.png" />
            <img alt="" src="/image-75@2x.png" />
            <img alt="" src="/image-76@2x.png" />
            <img alt="" src="/image-76@2x.png" />
            <img alt="" src="/image-77@2x.png" />
            <img alt="" src="/image-77@2x.png" />
            <img alt="" src="/image-78@2x.png" />
            <img alt="" src="/image-78@2x.png" />
            <img alt="" src="/image-79@2x.png" />
            <img alt="" src="/image-79@2x.png" />
          </div>
                
            </div>
            
        </div>
    )
}

export default Homepage;