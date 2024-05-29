import React, { useEffect, useState } from 'react'
import './order.css'
import { useLocation } from 'react-router-dom'
import Globe from './MobileViewIcon'
import { Context } from '../context/OrderContext';

function OrderPage() {
 const location = useLocation();
 const {orderProduct,setOrderProduct} = React.useContext(Context);


  const [formdata, setFormdata] = useState({
    name:"",email:""
  });
  const handleChange= (e) => {
    const {name,value}=e.currentTarget
    setFormdata(prevData=>({...prevData, [name]: value}))
  }

  const handleSubmit =(e) => {
    e.preventDefault();//prevent loading
    if(formdata.name.length > 0 && formdata.email.length > 0 ) {
    
    alert("Ordered Successfully!!!")
    const ownerPhoneNumber = ''; // owner's actual phone number(change value if needed)
    //  WhatsApp message
    const message = `Order Details:\nProduct Name: ${orderProduct.productName}\nName: ${formdata.name}\nEmail: ${formdata.email}`;
    
    // WhatsApp link with the owner's phone number and message
    const whatsappLink = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;
    // Opening WhatsApp
    window.open(whatsappLink, '_blank');
    
    setFormdata({
      name:"",email:""
    })
  }else{
    alert("enter form data before submitting")
  }
  }
  
  return (
    <div>
      <div className='nvimage'>
      <Globe />
      </div>
  <div className='order'>
    <div className='order-image' onSubmit={handleSubmit}>
      <img src={orderProduct && orderProduct.image}></img>
      <div className='order-name'>
      {orderProduct && orderProduct.productName}
      </div>
    </div>
    <div className='order-form'>
      <form className='form-order' onSubmit={handleSubmit}>
        <div className='form-input'>
        <input value={formdata.name} onChange={(e)=>handleChange(e)} className='order-input'type='text' name='name' placeholder='Enter name'></input>
        <input value={formdata.email} onChange={(e)=>handleChange(e)} className='order-input'type='email' name='email' placeholder='Enter email'></input>
        </div>
      {/* <div className='whatsapp-order-button'> */}
        <button className='order-btn' type="submit">
          <div className='order-btn-des'>
             <div className='whatsapp-img'>
              <img src='./whatsapp-img.png'></img>
             </div>
             <div className='btn-text' >Order Now!</div>
          </div>
        </button>
      {/* </div> */}
      </form>
    </div>
  </div>
        </div>
  )
}

export default OrderPage
