import React,{useContext, useEffect} from "react";
import biryaniData from '../data/biryaniData.json';
import breakfastMixesData from '../data/breakfastMixesData.json';
import teaConcentrationsData from '../data/teaConcentrationsData.json'
import { Context } from "../context/OrderContext";
import { Link } from "react-router-dom";
import './product_style.css'

export default function Search(){
    const {searchItem,setShow,setOrderProduct} = useContext(Context);
    const [mappedData,setMappedData] = React.useState([]);
    console.log(searchItem.length);

    useEffect(() => {
        if (searchItem) {
            setShow(true);
            const regex = new RegExp(searchItem, 'i');

            const filteredBiryaniData = biryaniData.filter(item => regex.test(item.productName));
            const filteredBreakfastData = breakfastMixesData.filter(item => regex.test(item.productName));
            const filteredTeaData = teaConcentrationsData.filter(item => regex.test(item.productName));

            const combinedData = [...filteredBiryaniData, ...filteredBreakfastData, ...filteredTeaData];
            setMappedData(combinedData);
        } else {
            setShow(false);
            setMappedData([]); 
        }
    }, [searchItem, setShow])

    const handleBuyNowClick = (productName,image,category) => {
        // Set the product ID in localStorage
        setOrderProduct({
            productName,
            image,
            category
        })
    };
    return(
        <>
        {mappedData.map((product) => (
             <div key={product.id} className='col-md-4 col-sm-6 col-xs-6 col-6 mb-2 prod-card-main' style={{ position: 'relative' }}>
             <div className='prod-card' >
                 <div className='discount-tag'>10% Off</div>
                 <img src={product.image} className='p-img' alt={product.productName}></img>
                 <div className='prod-card-title'>{product.productName}</div>
                 <Link to={{
                     pathname: `/orderpage`,
                     state: {
                         data:{productName:product.productName,image:product.image,sno:product.sno}
                     }
                 }}>
                     <button className='btn-prod-card buynow-btn' onClick={() => handleBuyNowClick(product.productName,product.image,product.category)}>
                         Buy Now
                     </button>
                 </Link>

             </div>
         </div>
        )
        )}
           
        </>
    )
}
