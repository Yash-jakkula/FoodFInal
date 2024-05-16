import React, { useEffect, useState } from 'react';
import './product_style.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Globe from './MobileViewIcon';
import { Context } from '../context/OrderContext';
import Search from './Search';
import breakfastMixesData from '../data/breakfastMixesData.json'
import biryaniData from '../data/biryaniData.json'
import teaConcentrationsData from '../data/teaConcentrationsData.json'
import Flours from '../data/Flours.json';
  
  
let data = {
    breakfast: breakfastMixesData,
    breakfastMixPowders: breakfastMixesData.filter((each) => each.category === "Ready to Mix Powders"),
    breakfastCookPowders: breakfastMixesData.filter((each) => each.category === "Ready to Cook Powders"),
    breakfastChutneys: breakfastMixesData.filter((each) => each.category === "Chutney"),
    breakfastSambars: breakfastMixesData.filter((each) => each.category === "Sambhar"),
    nonVegMasalas: biryaniData.filter((each) => each.category === "Non-Veg Biryani Masalas"),
    vegMasalasdata: biryaniData.filter((each) => each.category === "Veg Masala"),
    teadata: teaConcentrationsData.filter((each) => each.category === "Tea Masala’s"),
    beveragesdata: teaConcentrationsData.filter((each) => each.category === "Beverage Concentrates"),
    flourdata:Flours.filter((each) => each.category === 'Flours')
}


function ProductPage() {
  const navigate=useNavigate()
  console.log(breakfastMixesData);
  const {searchItem,orderProduct,setOrderProduct,show} = React.useContext(Context);
  console.log(show);
console.log(searchItem,'sra');
  const [activeTab, setActiveTab] = useState('breakfast');

  const handleTabClick = (tabName) => {
      setActiveTab(tabName);
  };

  let activeName
  if (activeTab === "breakfast") {
      activeName = "Mix Powders"
  } else if (activeTab === "biryani") {
      activeName = "Non-Veg Biryani Masalas"
  } else if(activeTab === 'Flours') {
      activeName = "Flours"
  }
  

  const [activeFilter, setActiveFilter] = useState(activeName);

  const handleFilterClick = (filterName) => {
    console.log(filterName);
      setActiveFilter(filterName);
  };

  const handleBuyNowClick = (productName,image,category) => {
      // Set the product ID in localStorage
      setOrderProduct({
          productName,
          image,
          category
      })
      localStorage.setItem('productId', productName);
      localStorage.setItem("category", category);
  };


    return (
        <>
       
       {/* <p style={{ fontWeight: 'bold', display: 'inline-block', textAlign: 'center', width: '100%' }}>products page</p> */}
       <div>
       <div className='nvimage'>
       <Globe />
       </div>
       </div>
        {!searchItem ?   
       <>
       <div className='product-box'>
        
     <div className='row d-flex ml-2 mr-3'>
                <div className='col-md-3 col-sm-4 col-xs-4 col-4'>
                    <button className={`product-button-1 ${activeTab === 'breakfast' ? 'active' : ''}`} onClick={() => handleTabClick('breakfast')}>
                        <img className='btnIcon' src='https://www.pngitem.com/pimgs/m/360-3601614_breakfast-icon-png-breakfast-clipart-png-transparent-png.png' alt='Breakfast icon'></img>
                        <span className='ml-1 p-text'>breakfast</span>                      
                    </button>
                </div>
                <div className='col-md-3 col-sm-4 col-xs-4 col-4'>
                    <button className={`product-button-1 ${activeTab === 'biryani' ? 'active' : ''}`} onClick={() => handleTabClick('biryani')}>
                        <img className='btnIcon' src='https://cdn-icons-png.flaticon.com/512/12999/12999570.png' alt='Biryani icon'></img>
                        <span className='p-text'>biryani</span>
                    </button>
                </div>
                <div className='col-md-3 col-sm-4 col-xs-4 col-4'>
                    <button className={`product-button-1 ${activeTab === 'tea' ? 'active' : ''}`} onClick={() => handleTabClick('tea')}>
                        <img className='btnIcon' src='https://cdn-icons-png.flaticon.com/512/3600/3600323.png' alt='Biryani icon'></img>
                        <span className='p-text'>Tea</span>
                    </button>
                    </div>
                    
                <div className='col-md-3 col-sm-4 col-xs-4 col-4'>
                    <button className={`product-button-1 ${activeTab === 'Flours' ? 'active' : ''}`} onClick={() => {handleTabClick('Flours');handleFilterClick('Flours')}}>
                        <img className='btnIcon' src='https://cdn-icons-png.flaticon.com/512/1205/1205041.png' alt='Biryani icon'></img>
                        <span className='p-text'>Flours</span>
                    </button>
                </div>
     </div>
     <div className='prod-more-filter' style={{display:'flex',justifyContent:'center'}}>
     <div className='row mt-4'>
     {activeTab === "breakfast" && <div className='prod-d' style={{display:'flex',gap:'10px',marginBottom:'2rem'}}>
                      <div className='breakbtnMain'>
                      <div className='breakbtns-3'>
                        <button className={`filters-btn ${activeFilter === 'mix' ? 'active' : ''}`} onClick={() => handleFilterClick('Mix Powders')}>
                            Mix Powders
                        </button>
                        
                        
                        <button className={`filters-btn ${activeFilter === 'cook' ? 'active' : ''}`} onClick={() => handleFilterClick('cook')}>
                            Cook Powders
                        </button>
                        
                        
                        <button className={`filters-btn ${activeFilter === 'chutney' ? 'active' : ''}`} onClick={() => handleFilterClick('Chutney')}>
                            Chutney
                        </button>
                        </div>
                        <div className='breakbtns-1'>
                        <button className={`filters-btn ${activeFilter === 'sambhar' ? 'active' : ''}`} onClick={() => handleFilterClick('Sambar')}>
                            Sambhar
                        </button>
                        </div>
                        </div>
                    </div>}
     
                    {activeTab === "biryani" && <div className='filters-products'>
                      <div className='birbtn'>
                        <button className={`filters-btn ${activeFilter === 'Non-Veg' ? 'active' : ''}`} onClick={() => handleFilterClick('non-veg masala')}>
                            Non-Veg Biryani Masala's
                        </button>
                        <button className={`filters-btn ${activeFilter === 'Veg-biryani' ? 'active' : ''}`} onClick={() => handleFilterClick('veg masala')}>
                            Veg Biryani Masala's
                        </button>
                        </div>
                    </div>}
     
                    {activeTab === "tea" && <div className='filters-products'>
                        <div className='teabtn'>
                        <button className={`filters-btn ${activeFilter === 'Tea' ? 'active' : ''}`} onClick={() => handleFilterClick('Tea')}>
                            Tea
                        </button>
                        <button className={`filters-btn ${activeFilter === 'beverages' ? 'active' : ''}`} onClick={() => handleFilterClick('beverages')}>
                            Beverages
                        </button>
                        </div>
                    </div>}
     
     </div>
     {/* < button className = 'btn-prod-card buynow-btn mt-2' ><a href='OrderPage.js'>
        Buy Now</a> </button> */}
     {/* <div className='products-sort'>
      <div className='total-products'>98 Products</div>
      <div className='products-dropdown'>
        <button onClick={() => {}} className='drop-btn'>Sort By</button>
        <div className='dropdown-content'>
          <a href='#'>Link 1</a>
          <a href='#'>Link 2</a>
          <a href='#'>Link 3</a>
        </div>
      </div>
     </div> */}
     </div>
       </div>
     
     
     
     <div className="row m-2">
        {/* ------breakfast filtering---- */}
                  {activeTab === "breakfast" && activeFilter === "cook" && data.breakfastCookPowders.map((product) => {
                        const dataToSend = { id: product.sno }
                        return (
                            <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <img src={product.image} className='p-img' alt={product.name}></img>
                                    <div className='prod-card-title'>{product.name}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.name,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn mt-2' onClick={() => handleBuyNowClick(product.name,product.image,product.category)}>
                                            Buy Now
                                        </button>
                                    </Link>
     
                                </div>
                            </div>
                        )
                    })}
     
                    {activeTab === "breakfast" && activeFilter === "Mix Powders" && data.breakfastMixPowders.map((product) => {
                        const dataToSend = { id: product.sno }
                        return (
                            <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <img src={product.image} className='p-img' alt={product.name}></img>
                                    <div className='prod-card-title'>{product.name}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.name,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn mt-2' onClick={() => handleBuyNowClick(product.name,product.image,product.category)}>
                                            Buy Now
                                        </button>
                                    </Link>
     
                                </div>
                            </div>
                        )
                    })}
     
                    {activeTab === "breakfast" && activeFilter === "Chutney" && data.breakfastChutneys.map((product) => {
                        const dataToSend = { id: product.sno }
                        return (
                            <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <img src={product.image} className='p-img' alt={product.name}></img>
                                    <div className='prod-card-title'>{product.name}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.name,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn mt-2' onClick={() => handleBuyNowClick(product.name,product.image,product.category)}>
                                            Buy Now
                                        </button>
                                    </Link>
     
                                </div>
                            </div>
                        )
                    })}
     
                    {activeTab === "breakfast" && activeFilter === "Sambar" && data.breakfastSambars.map((product) => {
                        const dataToSend = { id: product.sno }
                        return (
                            <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <img src={product.image} className='p-img' alt={product.name}></img>
                                    <div className='prod-card-title'>{product.name}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.name,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn mt-2' onClick={() => handleBuyNowClick(product.name,product.image,product.category)}>
                                            Buy Now
                                        </button>
                                    </Link>
     
                                </div>
                            </div>
                        )
                    })}
                    {/* ----biryani filtering--- */}
                    {activeTab === "biryani" && activeFilter === "non-veg masala" && data.nonVegMasalas.map((product) => {
                        const dataToSend = { id: product.sno }
                        
                        return (
                            <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <div >
                                        <img src={product.image} className='p-img' alt={product.name}></img>
                                    </div>
                                    <div className='prod-card-title'>{product.name}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.name,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn mt-2' onClick={() => handleBuyNowClick(product.name,product.image,product.category)}>
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
     
                    {activeTab === "biryani" && activeFilter === "veg masala" && data.vegMasalasdata.map((product) => {
                        const dataToSend = { id: product.sno }
                        
                        return (
                            <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <div >
                                        <img className='p-img' src={product.image} alt={product.name}></img>
                                    </div>
                                    <div className='prod-card-title'>{product.name}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.name,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn mt-2' onClick={() => handleBuyNowClick(product.name,product.image,product.category)}>
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
     
                    {/* -----tea concentrations----- */}
                    { !teaConcentrationsData.length > 0 &&  activeTab === "tea" && data.vegMasalasdata.map((product) => {
                        const dataToSend = { id: product.sno }
                        
                        return (
                            <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <div >
                                        <img className='p-img' src={product.image} alt={product.name}></img>
                                    </div>
                                    <div className='prod-card-title'>{product.name}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.name,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn mt-2' onClick={() => handleBuyNowClick(product.name,product.image,product.category)}>
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                    {teaConcentrationsData.length > 0 && activeTab === "tea" && activeFilter === "Tea" && data.teadata.map((product) => {
                        const dataToSend = { id: product.sno }
                       
                        return (
                            <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <div >
                                        <img className='p-img' src={product.image} alt={product.name}></img>
                                    </div>
                                    <div className='prod-card-title'>{product.name}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.name,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn mt-2' onClick={() => handleBuyNowClick(product.name,product.image,product.category)}>
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                    {teaConcentrationsData.length > 0 && activeTab === "tea" && activeFilter === "beverages" && data.beveragesdata.map((product) => {
                        const dataToSend = { id: product.sno }
                      
                        return (
                            <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <div >
                                        <img className='p-img' src={product.image} alt={product.name}></img>
                                    </div>
                                    <div className='prod-card-title'>{product.name}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.name,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn mt-2' onClick={() => handleBuyNowClick(product.name,product.image,product.category)}>
                                            Buy Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

{activeTab === "Flours" && activeFilter === "Flours" && data.flourdata.map((product) => {
                        const dataToSend = { id: product.sno }
                        return (
                            <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
                                <div className='prod-card' >
                                    <div className='discount-tag'>10% Off</div>
                                    <img src={product.image} className='p-img' alt={product.name}></img>
                                    <div className='prod-card-title mt-3'>{product.name}</div>
                                    <Link to={{
                                        pathname: `/orderpage`,
                                        state: {
                                            data:{productName:product.name,image:product.image,sno:product.sno}
                                        }
                                    }}>
                                        <button className='btn-prod-card buynow-btn mt-2' onClick={() => handleBuyNowClick(product.name,product.image,product.category)}>
                                            Buy Now
                                        </button>
                                    </Link>
     
                                </div>
                            </div>
                        )
                    })}
     </div>
       </> 
         : <div className='row m-2'>
            <Search />
           </div>} 

     
        </>
    );
}

export default ProductPage;