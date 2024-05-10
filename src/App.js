import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import FooterPage from "./pages/FooterPage";
import Nav from './pages/Nav'
import AboutUs from './pages/AboutUs';
import ProductPage from "./pages/Productpage";
import OrderPage from "./pages/OrderPage";
import ContactUs from "./pages/ContactUs";
import './App.css'
import Search from "./pages/Search";

// import Home1 from "./pages/Home1";

// import Navbar from "./pages/Navbar";
// import Footer from "./pages/Footer";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const whatopen = ()=>{
    const ownerPhoneNumber = '9392587332';
    const message = "Hi there!"
    const whatsappLink = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;
// Opening WhatsApp
    window.open(whatsappLink, '_blank');
    console.log('clicked')

  }
  
  return (
    
    <div className="main" style={{overflow:'hidden',backgroundColor:'white'}}>
      <div className="row">
        <div className="col-12">
      <Nav />

      </div>
      <div className="col-12">
        {/* <button onClick={whatopen} ></button> */}
        <img onClick={whatopen} src="/whatsapp.png" className="w-image"/>
      <Routes>
       {/* <Route path="/footer" element={<Footer/>}/> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/ProductPage" element={<ProductPage />} />
      <Route path="/orderPage" element={<OrderPage />} />
      <Route path="ContactUs" element={<ContactUs />} />
    </Routes>
      </div>
      <div className="col-12 mt-5">
        <FooterPage />
      </div>
      </div>
    </div>
  
  
  );
}
export default App;
