
import React from "react";

const ContactUs = ()=>{

    const [name,setName] = React.useState()
    const [email,setEmail] = React.useState()
    const [queries,setQueries] = React.useState()

    const con = () => {
        console.log("values",name,email,queries);
        const ownerPhoneNumber = '9392587332';
        if(name && email && queries ){
        const message = `User Details:\nName: ${name}\nemail: ${email}\nquery: ${queries}`;
     
        const whatsappLink = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;
    // Opening WhatsApp
    window.open(whatsappLink, '_blank');
        }
        else{
            alert("enter all the details");
        }
    }
    return(
        <>
        <div>
            <div className="nvimage" style={{backgroundColor:'#004AAD'}}>
                <img className="navp" src="/demo.png" />
                </div>
            <div className="row mt-3 d-flex justify-content-center align-items-center">
                <div className="col-md-6 container d-flex justify-content-center">
                    <div style={{width:'80%'}}>
                    <img className="contactusimg" src="/contactus.png" alt="contactusimage" style={{width:"100%",height:'100%',position:'relative'}}/>
                    <img style={{position:'absolute',color:'white',bottom:'20%',left:'20%',width:'60%'}} src="/textcopy.png" />
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="row d-flex gap-4 justify-content-center" style={{width:'100%'}}>
                        <div className="col-md-6" style={{width:'100%',display:'flex',justifyContent:'center'}}>
                            <span style={{fontWeight:'600',fontSize:'20px',textAlign:'center'}}>ContactUs</span>
                        </div>
                        <div className="col-12">
                            <input onChange={(event)=>setName(event.target.value)} style={{paddingLeft:'10px',width:"100%",height:'50px',borderRadius:'10px',borderColor:'#004AAD66'}} type="text" placeholder="Enter Your name"/>
                        </div>
                        <div className="col-12">
                            <input onChange={(e)=>setEmail(e.target.value)} style={{paddingLeft:'10px',width:'100%',height:'50px',borderRadius:'10px',borderColor:'#004AAD66'}} type="text" placeholder="Enter Your Email"/>
                        </div>
                        <div className="col-12">
                            <textarea onChange={(e)=>setQueries(e.target.value)} style={{paddingLeft:'10px',width:'100%',borderRadius:'10px',borderColor:'#004AAD66'}} type="text" rows='10' cols='50' placeholder="Enter your queries"/>
                        </div>
                        <div className="col-12">
                            <button onClick={()=>con()} style={{paddingLeft:'10px',width:'100%',height:'55px',borderRadius:'10px',backgroundColor:'#004AAD',color:'white'}} type="submit">Send</button>
                        </div>
                    </div>
                </div>
            </div></div>
        </>
    )
}
export default ContactUs;

