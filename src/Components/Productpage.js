import React,{useEffect} from 'react';
import Slider from './Slider';
import ReactGA from 'react-ga4';
import Footer from './Footer';

const Productpage = ( {product, userId}) => 
{
  useEffect(()=>{ 
    const urlParams = new URLSearchParams(window.location.search);
  const product_id = urlParams.get('product_id')
    ReactGA.event({
    action: userId,
    category:"clicked product " + product_id,
    value: parseInt(product_id)
   });
  })

  return (
    <div> 
    <div className="product-page">
      <h1> {product.product_name} </h1>
      <Slider product={product} /> 
    </div>
    
    </div>
    

    
  );
};

export default Productpage;
